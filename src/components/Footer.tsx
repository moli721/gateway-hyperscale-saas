import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Docs", "Blog"],
    },
    {
        title: "Company",
        links: ["About Us", "Careers", "Contact"],
    },
    {
        title: "Resources",
        links: ["Community", "Support", "API Status"],
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service"],
    },
];

const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
];

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-border bg-background-secondary py-20">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="select-none text-[clamp(6rem,18vw,16rem)] font-black leading-none text-white/5">
                    VEXAR
                </span>
            </div>
            <div className="container relative z-10 mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-5">
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-xl font-bold">VEXAR</h3>
                    <p className="mt-2 text-sm text-text-muted">
                        The API Vexar for Hyperscale Engineering.
                    </p>
                </div>
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h4 className="font-bold text-text">{section.title}</h4>
                        <ul className="mt-4 space-y-2 list-none p-0">
                            {section.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        to="#"
                                        className="text-sm text-text-muted transition-colors hover:text-text"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="container relative z-10 mx-auto mt-16 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
                <p className="text-sm text-text-muted">
                    &copy; {new Date().getFullYear()} Vexar, Inc. All rights reserved.
                </p>
                <div className="mt-4 flex items-center space-x-4 sm:mt-0">
                    <input
                        type="email"
                        placeholder="Subscribe to our newsletter"
                        aria-label="Subscribe to our newsletter"
                        className="w-full border-b border-border bg-transparent pb-1 text-sm text-text-muted placeholder:text-text-dark-muted focus:border-accent-blue focus:outline-none sm:w-auto"
                    />
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-text-muted transition-colors hover:text-text"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
