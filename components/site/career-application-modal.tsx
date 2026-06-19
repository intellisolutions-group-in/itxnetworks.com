"use client";

import { FormEvent, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { ThankYouModal } from "@/components/site/thank-you-modal";

type CareerApplicationModalProps = {
  open: boolean;
  jobTitle: string;
  onClose: () => void;
};

export function CareerApplicationModal({
  open,
  jobTitle,
  onClose,
}: CareerApplicationModalProps) {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open && !successOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    if (!String(data.get("fullName") || "").trim()) nextErrors.fullName = "Required";
    if (!String(data.get("email") || "").trim()) nextErrors.email = "Required";
    if (!String(data.get("phone") || "").trim()) nextErrors.phone = "Required";
    if (!String(data.get("location") || "").trim()) nextErrors.location = "Required";

    const resume = data.get("resume") as File | null;
    if (!resume || !resume.name) {
      nextErrors.resume = "Resume is required";
    } else {
      const allowed = [".pdf", ".doc", ".docx"];
      const lower = resume.name.toLowerCase();
      const validType = allowed.some((ext) => lower.endsWith(ext));
      if (!validType) nextErrors.resume = "Only PDF or DOC files allowed";
      if (resume.size > 5 * 1024 * 1024) nextErrors.resume = "Max file size is 5MB";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      onClose();
      form.reset();
      setSuccessOpen(true);
    }, 1000);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close application form"
            onClick={onClose}
          />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#1e1e1e] bg-[#0e0e0e]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1e1e1e] bg-[#0e0e0e] px-6 py-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-[#2196f3]">
                  APPLY_FOR_ROLE
                </p>
                <h2 className="font-display text-2xl text-[#f2ede6] mt-1">{jobTitle}</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[#5a5a5a] hover:text-[#f2ede6]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <ModalField label="FULL_NAME" name="fullName" required error={errors.fullName} />
              <ModalField label="EMAIL" name="email" type="email" required error={errors.email} />
              <ModalField label="PHONE" name="phone" required error={errors.phone} />
              <ModalField
                label="CURRENT_LOCATION"
                name="location"
                required
                error={errors.location}
              />
              <div>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#2196f3] mb-2 block">
                    RESUME (PDF/DOC, MAX 5MB)
                  </span>
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="block w-full font-mono text-xs text-[#5a5a5a] file:mr-4 file:border file:border-[#1e1e1e] file:bg-[#141414] file:px-4 file:py-2 file:text-[#f2ede6] file:font-mono file:text-[10px] file:tracking-widest"
                  />
                </label>
                {errors.resume && (
                  <span className="font-mono text-[10px] text-[#ef4444] mt-2 block">
                    {errors.resume}
                  </span>
                )}
              </div>
              <div>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#2196f3] mb-2 block">
                    COVER_LETTER (OPTIONAL)
                  </span>
                  <textarea
                    name="coverLetter"
                    rows={5}
                    className="w-full border border-[#1e1e1e] bg-[#050505] px-4 py-3 text-sm text-[#f2ede6] outline-none focus:border-[#2196f3]/40"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2196f3] text-[#050505] font-mono text-sm tracking-widest px-6 py-4 hover:bg-[#42a5f5] transition-colors font-semibold disabled:opacity-60 inline-flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  "SUBMIT_APPLICATION →"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <ThankYouModal
        open={successOpen}
        message="Thank you! Our team will review your application and reach you soon."
        onClose={() => setSuccessOpen(false)}
      />
    </>
  );
}

function ModalField({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.18em] text-[#2196f3] mb-2 block">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        className="w-full border border-[#1e1e1e] bg-[#050505] px-4 py-3 text-sm text-[#f2ede6] outline-none focus:border-[#2196f3]/40"
      />
      {error && (
        <span className="font-mono text-[10px] text-[#ef4444] mt-2 block">{error}</span>
      )}
    </label>
  );
}
