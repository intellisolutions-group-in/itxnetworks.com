"use client";

import { useEffect } from "react";
import { Check, X } from "lucide-react";

type ThankYouModalProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export function ThankYouModal({ open, message, onClose }: ThankYouModalProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, 3000);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thank-you-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md border border-[#1e1e1e] bg-white text-[#050505] p-8 text-center fade-up">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5a5a5a] hover:text-[#050505] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-[#22c55e]">
          <Check className="h-7 w-7 text-[#22c55e]" />
        </div>
        <h2 id="thank-you-title" className="font-display text-2xl text-[#050505] mb-3">
          SUCCESS
        </h2>
        <p className="font-mono text-sm text-[#5a5a5a] leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
