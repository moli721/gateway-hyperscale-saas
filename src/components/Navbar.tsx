import { Command, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/#blog", label: "Blog" }, // Assuming blog is a section on homepage
];

interface NavbarProps {
    onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
        >
            <div className="flex items-center justify-between rounded-full border border-border bg-black/50 p-2 pl-6 pr-3 backdrop-blur-md">
                <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-text">
                    <img src="/favicon.svg" alt="Vexar" className="h-6 w-6" />
                    Vexar
                </Link>
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="text-sm text-text-muted transition-colors hover:text-text"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onSearchClick}
                        className="flex cursor-pointer items-center gap-2 rounded-full p-2 text-text-muted transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                    >
                        <Search size={16} />
                        <div className="flex items-center gap-1 text-xs">
                            <Command size={12} />K
                        </div>
                    </button>
                    <button className="cursor-pointer rounded-full px-4 py-1.5 text-sm text-text-muted transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue">
                        Login
                    </button>
                    <button className="cursor-pointer rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-1.5 text-sm text-text transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue">
                        Sign Up
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
