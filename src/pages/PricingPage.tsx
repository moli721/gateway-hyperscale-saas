import { Check } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/utils";

const pricingTiers = [
  {
    name: "Developer",
    price: { monthly: "$0", yearly: "$0" },
    desc: "For individuals and hobby projects.",
    features: ["10k req/mo", "Community Support", "Basic analytics"],
    recommended: false,
  },
  {
    name: "Startup",
    price: { monthly: "$99", yearly: "$79" },
    desc: "For growing teams and businesses.",
    features: ["1M req/mo", "Email Support", "WAF", "Real-time Logs", "Global Edge Network"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    desc: "For large-scale applications and critical infrastructure.",
    features: ["Unlimited", "SLA", "Dedicated Account", "SSO & SAML", "On-premise"],
    recommended: false,
  },
];

export const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Transparent pricing for every stage.
          </h1>
          <p className="mt-4 text-text-muted">
            Simple plans for teams of all sizes. Upgrade whenever you are ready.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <span className={cn("text-text-muted", !isYearly && "text-text")}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "relative h-7 w-14 cursor-pointer rounded-full border border-border transition-colors",
              isYearly ? "bg-accent-blue/80" : "bg-surface"
            )}
          >
            <span
              className={cn(
                "absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform",
                isYearly ? "translate-x-7" : "translate-x-0"
              )}
            />
          </button>
          <span className={cn("text-text-muted", isYearly && "text-text")}>Yearly</span>
          <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
            Save 20%
          </span>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={reduceMotion ? { opacity: 1 } : { y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className={cn(
                "relative rounded-2xl border border-border bg-surface p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-transform",
                tier.recommended && "scale-[1.03] border-accent-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-1 text-xs font-medium text-text">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-text-muted">{tier.desc}</p>
              <p className="mt-6 text-5xl font-bold">
                {isYearly ? tier.price.yearly : tier.price.monthly}
                {tier.price.monthly !== "Custom" && tier.price.monthly !== "$0" && (
                  <span className="text-lg font-medium text-text-muted">/ mo</span>
                )}
              </p>
              <button
                className={cn(
                  "mt-8 w-full cursor-pointer rounded-full py-3 font-medium transition-colors",
                  tier.recommended
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-text hover:opacity-90"
                    : "bg-surface-hover text-text hover:bg-white/20"
                )}
              >
                Get Started
              </button>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
