import { ArrowRight, Activity, Globe, KeyRound, Server, Shield, Zap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heroWords = ["The", "API", "Gateway", "for"];

const features = [
  {
    title: "Global Edge Network",
    desc: "Deploy your APIs to the edge, achieving < 30ms latency worldwide.",
    icon: Globe,
    highlight: true,
  },
  {
    title: "Zero Trust Security",
    desc: "mTLS, JWT validation, and granular access policies built-in.",
    icon: Shield,
  },
  {
    title: "Real-time Observability",
    desc: "Structured logs, distributed tracing, and custom metrics.",
    icon: Activity,
  },
  {
    title: "High-Performance Core",
    desc: "Rust core with less than 1ms overhead at p95.",
    icon: Zap,
  },
  {
    title: "Declarative Configuration",
    desc: "Define services, routes, and policies in a simple config.",
    icon: Server,
  },
  {
    title: "Automated Key Management",
    desc: "Rotate keys and sync JWTs with your identity provider.",
    icon: KeyRound,
  },
];

const testimonials = [
  { quote: "Gateway transformed our microservices architecture.", name: "CTO @ScaleAI", company: "ScaleAI", logo: "/logos/scaleai.svg" },
  { quote: "The performance is simply unparalleled.", name: "Lead Eng @Vercel", company: "Vercel", logo: "/logos/vercel.svg" },
  { quote: "Observability is now a first-class citizen for us.", name: "DevOps @Linear", company: "Linear", logo: "/logos/linear.svg" },
  { quote: "We cut our ingress costs by 70%.", name: "Infra Lead @Plaid", company: "Plaid", logo: "/logos/plaid.svg" },
  { quote: "The declarative config is a game-changer.", name: "SRE @Ramp", company: "Ramp", logo: "/logos/ramp.svg" },
  { quote: "Finally, a gateway that doesn't get in the way.", name: "Eng Manager @Loom", company: "Loom", logo: "/logos/loom.svg" },
  { quote: "Our developers are shipping faster than ever.", name: "VP Eng @Brex", company: "Brex", logo: "/logos/brex.svg" },
  { quote: "The security features are incredibly robust.", name: "Security Eng @Retool", company: "Retool", logo: "/logos/retool.svg" },
  { quote: "I can't imagine going back to our old system.", name: "Principal Eng @Notion", company: "Notion", logo: "/logos/notion.svg" },
  { quote: "It just works. Perfectly.", name: "Founder @CodeSandbox", company: "CodeSandbox", logo: "/logos/codesandbox.svg" },
  { quote: "The best developer experience I've ever had.", name: "Staff Eng @Figma", company: "Figma", logo: "/logos/figma.svg" },
  { quote: "Support is responsive and actually helpful.", name: "Architect @ClickUp", company: "ClickUp", logo: "/logos/clickup.svg" },
];

const MotionWord: React.FC<{ word: string; index: number }> = ({ word, index }) => (
  <motion.span
    className="inline-block"
    initial={{ y: 24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
  >
    {word}&nbsp;
  </motion.span>
);

export const Homepage = () => {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const dashY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const dashRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const dashStyle = reduceMotion
    ? { transformPerspective: 1200 }
    : { y: dashY, rotateX: dashRotate, transformPerspective: 1200 };

  const marqueeTop = testimonials.slice(0, 6);
  const marqueeBottom = testimonials.slice(6);

  return (
    <div className="bg-background">
      <section ref={heroRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-32">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-110 object-cover"
          >
            <source
              src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/6571025a2e02041c8b85dbd43210fa3a/manifest/video.m3u8"
              type="application/x-mpegURL"
            />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 rounded-full border border-border bg-black/50 px-4 py-1 text-xs font-badge uppercase tracking-widest text-text-muted"
          >
            v2.0 Now Available
          </motion.div>

          <h1 className="text-5xl font-display font-bold leading-[0.95] tracking-tighter text-text sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">
              {heroWords.map((word, index) => (
                <MotionWord key={word} word={word} index={index} />
              ))}
            </span>
            <span className="block">
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic text-blue-400"
              >
                Hyperscale
              </motion.span>{" "}
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Engineering.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base text-text-muted sm:text-lg"
          >
            Secure, observe, and manage your microservices with zero latency overhead.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="group relative rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-7 py-3 font-cta text-text transition-transform duration-300 hover:scale-105">
              Start Building
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 font-cta text-text-muted transition-colors duration-300 hover:bg-surface-hover hover:text-text">
              Read the Docs <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        <motion.div
          style={dashStyle}
          className="pointer-events-none absolute bottom-[-12%] z-20 w-[88%] max-w-5xl rounded-2xl border border-border bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-border/70 bg-black/40 p-5">
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>Requests / min</span>
                <span className="rounded-full border border-border px-2 py-0.5">LIVE</span>
              </div>
              <div className="mt-4 text-3xl font-bold">1.8M</div>
              <div className="mt-4 h-32 rounded-lg bg-[linear-gradient(120deg,rgba(59,130,246,0.2),rgba(139,92,246,0.05))]">
                <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:18px_18px]" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-border/70 bg-black/40 p-4">
                <div className="text-xs text-text-muted">Edge Regions</div>
                <div className="mt-2 text-2xl font-semibold">42 Online</div>
              </div>
              <div className="rounded-xl border border-border/70 bg-black/40 p-4">
                <div className="text-xs text-text-muted">P95 Latency</div>
                <div className="mt-2 text-2xl font-semibold">18ms</div>
              </div>
              <div className="rounded-xl border border-border/70 bg-black/40 p-4">
                <div className="text-xs text-text-muted">Security Events</div>
                <div className="mt-2 text-2xl font-semibold">0 Critical</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="bg-background-secondary py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Built for Modern Engineering</h2>
            <p className="mt-4 text-text-muted">
              Gateway provides the building blocks for secure, scalable, and observable APIs.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-surface-hover ${feature.highlight ? "md:col-span-2" : ""}`}
              >
                <div className="relative z-10">
                  <feature.icon className="mb-4 h-8 w-8 text-accent-blue" />
                  <h3 className="text-lg font-bold text-text">{feature.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{feature.desc}</p>
                </div>
                {feature.highlight && (
                  <div className="relative z-10 mt-6 h-36 rounded-xl border border-border/60 bg-black/30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.35),transparent_55%)]" />
                    <div className="absolute left-8 top-10 h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse motion-reduce:animate-none" />
                    <div className="absolute right-14 top-6 h-2 w-2 rounded-full bg-accent-purple shadow-[0_0_20px_rgba(139,92,246,0.6)] animate-pulse motion-reduce:animate-none" />
                    <div className="absolute left-24 bottom-8 h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse motion-reduce:animate-none" />
                    <div className="absolute right-32 bottom-10 h-2 w-2 rounded-full bg-accent-purple shadow-[0_0_20px_rgba(139,92,246,0.6)] animate-pulse motion-reduce:animate-none" />
                  </div>
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Trusted by the Best</h2>
            <p className="mt-4 text-text-muted">
              From high-growth startups to Fortune 500 companies, engineers trust Gateway.
            </p>
          </motion.div>
        </div>
        <div className="relative mt-16 flex flex-col gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex animate-infinite-scroll space-x-6 motion-reduce:animate-none">
            {marqueeTop.map((t, i) => <TestimonialCard key={`top-${i}`} {...t} />)}
            {marqueeTop.map((t, i) => <TestimonialCard key={`top-dup-${i}`} {...t} />)}
          </div>
          <div className="flex animate-infinite-scroll-reverse space-x-6 motion-reduce:animate-none">
            {marqueeBottom.map((t, i) => <TestimonialCard key={`bottom-${i}`} {...t} />)}
            {marqueeBottom.map((t, i) => <TestimonialCard key={`bottom-dup-${i}`} {...t} />)}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container relative mx-auto px-4">
          <div className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_60%)] blur-3xl" />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-5xl font-bold tracking-tighter text-text sm:text-7xl">Ready to scale?</h2>
            <p className="mt-4 max-w-xl text-lg text-text-muted">
              Start for free. No credit card required. Instantly unlock the full power of Gateway.
            </p>
            <button className="group relative mt-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-12 py-5 font-cta text-xl text-text transition-transform duration-300 hover:scale-105">
              Get Started for Free <ArrowRight className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  logo: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, company, logo }) => (
  <div className="w-80 flex-shrink-0 rounded-2xl border border-border bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
    <p className="text-sm text-text">"{quote}"</p>
    <div className="mt-4 flex items-center gap-4">
      <img src={logo} alt={company} className="h-8 w-auto grayscale" />
      <div>
        <p className="text-sm font-bold text-text">{name}</p>
        <p className="text-xs text-text-muted">{company}</p>
      </div>
    </div>
  </div>
);
