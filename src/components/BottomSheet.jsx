import { useEffect } from "react";

export default function BottomSheet({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-ink-surface border border-ink-line p-6 shadow-2xl animate-scaleIn">
        {/* <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-ink-line" /> */}
        {children}
      </div>
    </div>
  );
}
