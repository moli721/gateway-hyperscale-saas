import { ArrowRight, Globe, KeyRound, Server, Shield, Zap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { CardStack, type CardStackItem } from "../components/ui/card-stack";

const heroWords = ["The", "API", "Vexar", "for"];

const features = [
  {
    id: 1,
    title: "Global Edge Network",
    description: "Deploy your APIs to the edge, achieving < 30ms latency worldwide.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Zero Trust Security",
    description: "mTLS, JWT validation, and granular access policies built-in.",
    icon: Shield,
  },
  {
    id: 3,
    title: "High-Performance Core",
    description: "Rust core with less than 1ms overhead at p95.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Declarative Configuration",
    description: "Define services, routes, and policies in a simple config.",
    icon: Server,
  },
  {
    id: 5,
    title: "Automated Key Management",
    description: "Rotate keys and sync JWTs with your identity provider.",
    icon: KeyRound,
  },
];

const testimonials = [
  { quote: "Vexar transformed our microservices architecture.", name: "CTO @ScaleAI", company: "ScaleAI", logo: "/logos/scaleai.svg" },
  { quote: "The performance is simply unparalleled.", name: "Lead Eng @Vercel", company: "Vercel", logo: "/logos/vercel.svg" },
  { quote: "Observability is now a first-class citizen for us.", name: "DevOps @Linear", company: "Linear", logo: "/logos/linear.svg" },
  { quote: "We cut our ingress costs by 70%.", name: "Infra Lead @Plaid", company: "Plaid", logo: "/logos/plaid.svg" },
  { quote: "The declarative config is a game-changer.", name: "SRE @Ramp", company: "Ramp", logo: "/logos/ramp.svg" },
  { quote: "Finally, a vexar that doesn't get in the way.", name: "Eng Manager @Loom", company: "Loom", logo: "/logos/loom.svg" },
  { quote: "Our developers are shipping faster than ever.", name: "VP Eng @Brex", company: "Brex", logo: "/logos/brex.svg" },
  { quote: "The security features are incredibly robust.", name: "Security Eng @Retool", company: "Retool", logo: "/logos/retool.svg" },
  { quote: "I can't imagine going back to our old system.", name: "Principal Eng @Notion", company: "Notion", logo: "/logos/notion.svg" },
  { quote: "It just works. Perfectly.", name: "Founder @CodeSandbox", company: "CodeSandbox", logo: "/logos/codesandbox.svg" },
  { quote: "The best developer experience I've ever had.", name: "Staff Eng @Figma", company: "Figma", logo: "/logos/figma.svg" },
  { quote: "Support is responsive and actually helpful.", name: "Architect @ClickUp", company: "ClickUp", logo: "/logos/clickup.svg" },
];

const featureCards = [
  {
    title: "Routing Intelligence",
    subtitle: "Policy-first, zero drift.",
    tone: "from-accent-blue/70 via-accent-purple/30 to-black/80",
  },
  {
    title: "Zero-Trust Kit",
    subtitle: "mTLS + JWT by default.",
    tone: "from-accent-purple/70 via-accent-blue/30 to-black/80",
  },
  {
    title: "Realtime Signals",
    subtitle: "Logs, traces, metrics.",
    tone: "from-accent-blue/60 via-accent-purple/20 to-black/85",
  },
  {
    title: "Edge Builder",
    subtitle: "Composable primitives.",
    tone: "from-accent-purple/60 via-accent-blue/20 to-black/85",
  },
  {
    title: "Interface Kit",
    subtitle: "Secure vexars, fast.",
    tone: "from-[#0F172A]/80 via-accent-blue/15 to-black/90",
  },
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
      <section ref={heroRef} className="relative -mt-16 flex min-h-screen flex-col items-center justify-center overflow-hidden pb-32">
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/assets/backgroundvideo.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/70" />
          {/* Gradient fade to black at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
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
            className="relative z-30 mt-8 mb-32 flex flex-wrap items-center justify-center gap-4"
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
          className="pointer-events-none absolute bottom-[-12%] z-10 w-[88%] max-w-5xl rounded-2xl border border-border bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
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

      <section id="features" className="relative bg-background-secondary py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Built for <span className="font-serif italic text-blue-400">Modern</span> Engineering.
            </h2>
            <p className="mt-4 mx-auto max-w-md text-zinc-400">
              Vexar provides the building blocks for secure, scalable, and observable APIs.
            </p>
          </motion.div>

          <IrregularFeatureCards />

          <div className="relative mt-16">
            <CardStack
              items={features as CardStackItem[]}
              initialIndex={0}
              maxVisible={5}
              cardWidth={480}
              cardHeight={320}
              overlap={0.6}
              spreadDeg={38}
              perspectivePx={1200}
              depthPx={100}
              tiltXDeg={8}
              activeLiftPx={24}
              activeScale={1.05}
              inactiveScale={0.93}
              springStiffness={280}
              springDamping={28}
              loop={true}
              autoAdvance={false}
              showDots={true}
              renderCard={(item, { active }) => {
                const Icon = item.icon;

                // 为每张卡片定义独特的渐变色
                const cardGradients: Record<string, string> = {
                  "Global Edge Network": "radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)",
                  "Zero Trust Security": "radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)",
                  "High-Performance Core": "radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)",
                  "Declarative Configuration": "radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)",
                  "Automated Key Management": "radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)",
                };

                const gradient = cardGradients[item.title] || "radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_50%)";

                return (
                  <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-black shadow-[0_20px_70px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-500">
                    {/* Subtle noise texture */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.02]"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                      }}
                    />

                    {/* Unique gradient overlay for each card */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl"
                      style={{ background: gradient }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.02),rgba(0,0,0,0.8))] opacity-80" />

                    {/* Active state glow */}
                    {active && (
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)]" />
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col items-center justify-center p-7 text-center">
                      {Icon && (
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06]">
                          <Icon className="h-6 w-6 text-accent-blue opacity-90" />
                        </span>
                      )}
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {item.title.includes("Global") && (
                          <>
                            <span className="font-serif italic text-accent-blue/90">Global</span> Edge Network
                          </>
                        )}
                        {item.title.includes("Zero") && (
                          <>
                            Zero <span className="font-serif italic text-accent-purple/90">Trust</span> Security
                          </>
                        )}
                        {item.title.includes("High") && (
                          <>
                            <span className="font-serif italic text-accent-blue/90">High-Performance</span> Core
                          </>
                        )}
                        {item.title.includes("Declarative") && (
                          <>
                            Declarative <span className="font-serif italic text-accent-blue/90">Config</span>
                          </>
                        )}
                        {item.title.includes("Automated") && (
                          <>
                            <span className="font-serif italic text-accent-purple/90">Automated</span> Key Management
                          </>
                        )}
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              }}
            />
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
              From high-growth startups to Fortune 500 companies, engineers trust Vexar.
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
              Start for free. No credit card required. Instantly unlock the full power of Vexar.
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

const IrregularFeatureCards = () => {
  const [deckHovered, setDeckHovered] = useState(false);

  const rotations = [-8, 5, 12, -6, 7];
  const offsets = [
    { x: -18, y: 12 },
    { x: 8, y: 4 },
    { x: 18, y: 10 },
    { x: -6, y: 22 },
    { x: 14, y: 28 },
  ];

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div
        className="relative h-[420px] w-full max-w-xl"
        onMouseEnter={() => setDeckHovered(true)}
        onMouseLeave={() => setDeckHovered(false)}
      >
        <div className="absolute -inset-8 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_55%)] blur-2xl" />
        <div className="relative mx-auto w-64">
          {featureCards.map((card, index) => {
            const baseOffset = index * 14;
            const fanOffset = deckHovered ? index * 62 : baseOffset;
            const scale = 1 - index * 0.03;
            const depthClass = index === featureCards.length - 1 ? "opacity-20 blur-[2px]" : "opacity-100";
            return (
              <motion.button
                key={card.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                  x: deckHovered ? offsets[index].x : 0,
                  y: fanOffset + offsets[index].y,
                  rotate: deckHovered ? rotations[index] : rotations[index] * 0.6,
                  scale,
                }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 w-64 origin-top cursor-pointer"
                style={{ zIndex: featureCards.length - index }}
                aria-label={card.title}
              >
                <div className={`flex h-72 w-full flex-col justify-end rounded-2xl border border-border bg-[#0A0A0A]/80 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 ${depthClass}`}>
                  <div className="text-lg font-semibold text-white">{card.title}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">{card.subtitle}</div>
                  <div className={`mt-6 h-20 rounded-xl bg-gradient-to-br ${card.tone} opacity-70`} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="max-w-xl">
        <p className="text-xs font-badge uppercase tracking-widest text-text-muted">Feature Stack</p>
        <h3 className="mt-3 text-4xl font-bold tracking-tighter">A cohesive, tactile system.</h3>
        <p className="mt-4 text-base text-text-muted">
          Cards float with depth and focus, while maintaining the same blue-purple energy that powers the rest of the brand.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-text-muted">
          <span className="rounded-full border border-border px-3 py-1">Hover lift</span>
          <span className="rounded-full border border-border px-3 py-1">Soft parallax</span>
          <span className="rounded-full border border-border px-3 py-1">Focus glow</span>
        </div>
      </div>
    </div>
  );
};


