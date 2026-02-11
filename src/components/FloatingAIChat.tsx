import { Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const FloatingAIChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex h-96 w-80 flex-col rounded-2xl border border-border bg-surface shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles size={16} className="text-accent-purple" />
                Vexar AI
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-text-muted transition-colors hover:text-text"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
              <div className="rounded-xl border border-border bg-black/40 p-3 text-text-muted">
                Ask AI about our API, routing rules, or deployment paths.
              </div>
              <div className="ml-auto w-[85%] rounded-xl bg-gradient-to-r from-accent-blue/40 to-accent-purple/40 p-3 text-text">
                How do I enable zero-trust policies?
              </div>
              <div className="rounded-xl border border-border bg-black/40 p-3 text-text-muted">
                Use the `policies` block in your vexar.yml to enforce mTLS and JWT validation.
              </div>
            </div>
            <div className="border-t border-border p-3">
              <input
                type="text"
                placeholder="Ask AI about our API..."
                className="w-full rounded-full border border-border bg-black/40 px-4 py-2 text-sm text-text placeholder:text-text-dark-muted focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle AI chat"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <Sparkles className="h-6 w-6 text-white transition-colors group-hover:text-accent-purple" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
        <span className="absolute inset-0 rounded-full border-2 border-accent-blue/50 animate-pulse motion-reduce:animate-none" />
      </motion.button>
    </div>
  );
};
