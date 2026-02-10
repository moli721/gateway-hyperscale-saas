import { Code2, FileText, Layers, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchItems = [
  { title: "Quickstart Overview", type: "Page", icon: FileText, href: "/docs#overview" },
  { title: "Installation", type: "Page", icon: FileText, href: "/docs#installation" },
  { title: "Basic Configuration", type: "API", icon: Code2, href: "/docs#basic-config" },
  { title: "Deploying your Gateway", type: "API", icon: Layers, href: "/docs#deploying" },
  { title: "Pricing", type: "Page", icon: FileText, href: "/pricing" },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    if (!query.trim()) return searchItems;
    const q = query.toLowerCase();
    return searchItems.filter(item => item.title.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    setActiveIndex(0);
  }, [isOpen, query]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(filtered.length, 1));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
      }
      if (event.key === "Enter" && filtered[activeIndex]) {
        window.location.href = filtered[activeIndex].href;
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, filtered, isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-24 left-1/2 w-[92%] max-w-2xl -translate-x-1/2 rounded-2xl border border-border bg-surface shadow-xl"
          >
            <div className="flex items-center gap-4 border-b border-border p-4">
              <Search className="text-text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                aria-label="Search documentation"
                placeholder="Search documentation, APIs, and components..."
                className="w-full bg-transparent text-lg text-text placeholder:text-text-dark-muted focus:outline-none"
              />
            </div>
            <div className="p-3">
              {filtered.length === 0 && (
                <p className="p-4 text-center text-sm text-text-muted">No results found</p>
              )}
              <ul className="space-y-2">
                {filtered.map((item, index) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-text-muted transition-colors hover:bg-white/5 hover:text-text",
                        index === activeIndex && "border-border bg-white/5 text-text"
                      )}
                    >
                      <item.icon size={16} className="text-text-muted" />
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-text-dark-muted">{item.type}</div>
                      </div>
                      <span className="text-xs text-text-dark-muted">↵</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
