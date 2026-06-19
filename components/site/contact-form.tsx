"use client";

import { FormEvent, useState } from "react";
import { ThankYouModal } from "@/components/site/thank-you-modal";
import { Spinner } from "@/components/ui/spinner";

type ContactFormProps = {
  submitLabel?: string;
  showSubject?: boolean;
};

export function ContactForm({
  submitLabel = "SUBMIT_INQUIRY",
  showSubject = true,
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    if (!String(data.get("name") || "").trim()) nextErrors.name = "Name is required";
    if (!String(data.get("email") || "").trim()) nextErrors.email = "Email is required";
    if (!String(data.get("message") || "").trim()) nextErrors.message = "Message is required";

    const email = String(data.get("email") || "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      form.reset();
      setModalOpen(true);
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="border border-[#1e1e1e]" aria-label="Contact inquiry form">
        <div className="grid md:grid-cols-2 border-b border-[#1e1e1e]">
          <Field label="FULL_NAME" name="name" error={errors.name} />
          <Field label="EMAIL" name="email" type="email" error={errors.email} />
        </div>
        {showSubject && (
          <div className="border-b border-[#1e1e1e]">
            <Field label="SUBJECT" name="subject" error={errors.subject} />
          </div>
        )}
        <div className="border-b border-[#1e1e1e]">
          <label className="block">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#2196f3] px-5 pt-5 block">
              MESSAGE
            </span>
            <textarea
              name="message"
              rows={6}
              className="w-full bg-transparent px-5 pb-5 pt-3 text-sm text-[#f2ede6] outline-none resize-y min-h-[160px]"
            />
            {errors.message && (
              <span className="font-mono text-[10px] text-[#ef4444] px-5 pb-4 block">
                {errors.message}
              </span>
            )}
          </label>
        </div>
        <div className="p-5">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-3 bg-[#2196f3] text-[#050505] font-mono text-sm tracking-widest px-6 py-4 hover:bg-[#42a5f5] transition-colors font-semibold disabled:opacity-60"
          >
            {loading ? (
              <>
                <Spinner className="size-4 text-[#050505]" />
                SUBMITTING...
              </>
            ) : (
              <>
                {submitLabel}
                <span>→</span>
              </>
            )}
          </button>
        </div>
      </form>

      <ThankYouModal
        open={modalOpen}
        message="Thank you! We will reach you soon."
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <label className="block border-b md:border-b-0 md:border-r border-[#1e1e1e] last:border-r-0">
      <span className="font-mono text-[10px] tracking-[0.18em] text-[#2196f3] px-5 pt-5 block">
        {label}
      </span>
      <input
        name={name}
        type={type}
        className="w-full bg-transparent px-5 pb-5 pt-3 text-sm text-[#f2ede6] outline-none"
      />
      {error && (
        <span className="font-mono text-[10px] text-[#ef4444] px-5 pb-4 block">{error}</span>
      )}
    </label>
  );
}
