/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#000000", // Absolute Void
                    secondary: "#050505", // Deep Charcoal
                },
                surface: {
                    DEFAULT: "rgba(255, 255, 255, 0.03)", // Glass White
                    hover: "rgba(255, 255, 255, 0.08)",
                },
                border: {
                    DEFAULT: "rgba(255, 255, 255, 0.08)", // Subtle White
                },
                accent: {
                    blue: "#3B82F6", // Electric Blue
                    purple: "#8B5CF6", // Vivid Purple
                },
                text: {
                    DEFAULT: "#FFFFFF",
                    muted: "#A1A1AA",
                    "dark-muted": "#52525B",
                },
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                serif: ["Instrument Serif", "serif"],
                display: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
                badge: ["Manrope", ...defaultTheme.fontFamily.sans],
                cta: ["Cabin", ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                tighter: "-0.04em",
                tight: "-0.02em",
                widest: "0.1em",
            },
            lineHeight: {
                tighter: "0.95",
            },
            boxShadow: {
                glow: "inset 0 1px 0 0 rgba(255,255,255,0.1)",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 25s linear infinite",
                "infinite-scroll-reverse":
                    "infinite-scroll-reverse 25s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
                "infinite-scroll-reverse": {
                    from: { transform: "translateX(-100%)" },
                    to: { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
