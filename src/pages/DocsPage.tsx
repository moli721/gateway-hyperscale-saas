import { ChevronDown, ChevronRight, Copy, FileText } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "../lib/utils";

const docsNav = [
  { section: "Getting Started", items: ["Introduction", "Quickstart", "Concepts", "Architecture"] },
  { section: "API Reference", items: ["Authentication", "Rate Limiting", "Endpoints", "Webhooks", "SDKs"] },
  { section: "Guides", items: ["Deploying to Vercel", "Custom Domains", "CI/CD Integration"] },
  { section: "Advanced", items: ["Plugins", "Monitoring", "Security Policies"] },
];

const mainContentHeadings = [
  { id: "overview", level: 2, text: "Overview" },
  { id: "installation", level: 2, text: "Installation" },
  { id: "basic-config", level: 3, text: "Basic Configuration" },
  { id: "deploying", level: 2, text: "Deploying your Gateway" },
  { id: "next-steps", level: 2, text: "Next Steps" },
];

const CodeBlock: React.FC<{ language: string; code: string }> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative rounded-xl border border-border bg-black/50 p-4">
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
        className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-border bg-black/40 px-3 py-1 text-xs text-text-muted transition-colors hover:text-text"
      >
        <Copy size={12} />
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto text-sm text-text">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export const DocsPage = () => {

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8 px-4 pt-32">
      <aside className="sticky top-24 col-span-12 h-auto md:col-span-4 lg:col-span-3">
        <div className="rounded-2xl border border-border bg-surface p-4">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-muted">
            <FileText size={14} /> Documentation
          </div>
          <nav className="mt-4">
            <ul>
              {docsNav.map((navItem) => (
                <NavItem key={navItem.section} {...navItem} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <main className="col-span-12 lg:col-span-6 prose prose-invert max-w-none prose-h1:tracking-tighter prose-h1:font-bold prose-h2:tracking-tighter prose-h2:font-bold prose-h3:font-bold prose-a:text-accent-blue hover:prose-a:underline">
        <h1>Quickstart</h1>
        <p>
          This guide walks you through installing Vexar, creating a basic configuration,
          and deploying your first API to the edge.
        </p>

        <h2 id="overview">Overview</h2>
        <p>
          Vexar is a high-performance, declarative API gateway built for modern cloud-native
          applications. It allows you to manage, secure, and observe your APIs with ease.
        </p>

        <h2 id="installation">Installation</h2>
        <p>Install the Vexar CLI on macOS or Linux:</p>
        <CodeBlock
          language="bash"
          code={`# macOS\nbrew install vexar-cli\n\n# Linux / WSL\ncurl -sSL https://vexar.dev/install.sh | sh`}
        />

        <h3 id="basic-config">Basic Configuration</h3>
        <p>Create a vexar.yml file in your project root.</p>
        <CodeBlock
          language="yaml"
          code={`version: "1.0"\nservices:\n  - name: my-api\n    url: http://localhost:3000\n    routes:\n      - path: /my-api\n        methods: [GET, POST]`}
        />

        <h2 id="deploying">Deploying your Vexar</h2>
        <p>Once configured, deploy with a single command:</p>
        <CodeBlock language="bash" code={`vexar deploy`} />
        <p>
          This provisions the required infrastructure and deploys your vexar to the edge,
          making it globally available in seconds.
        </p>

        <h2 id="next-steps">Next Steps</h2>
        <ul>
          <li>Explore advanced security features like JWT validation and mTLS.</li>
          <li>Set up monitoring and logging integrations.</li>
          <li>Use plugins to extend Vexar functionality.</li>
        </ul>
      </main>

      <aside className="sticky top-24 col-span-3 hidden h-[calc(100vh-6rem)] lg:block">
        <div className="rounded-2xl border border-border bg-surface p-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">On this page</h3>
          <ul className="mt-4 space-y-2">
            {mainContentHeadings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={cn(
                    "text-sm text-text-muted transition-colors hover:text-text",
                    h.level === 3 && "ml-4"
                  )}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

interface NavItemProps {
  section: string;
  items: string[];
}

const NavItem: React.FC<NavItemProps> = ({ section, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const reduceMotion = useReducedMotion();
  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-left font-medium text-text"
      >
        {section}
        {isOpen ? <ChevronDown size={16} className="text-text-muted" /> : <ChevronRight size={16} className="text-text-muted" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            className="ml-2 overflow-hidden border-l border-border"
          >
            {items.map((item: string) => (
              <li key={item}>
                <a
                  href="#"
                  className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-text-muted transition-colors hover:border-accent-blue hover:text-text"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
