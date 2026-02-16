import { Link, useLocation } from "wouter";
import { cn } from "../lib/utils";
import { Terminal, Home, Cpu, Send, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: Cpu },
    { href: "/skills", label: "Skills", icon: Terminal },
    { href: "/research", label: "Research", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Send },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <div className="glass-card rounded-full px-6 py-3 flex items-center gap-2 md:gap-6 justify-between border-cyan-500/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.href} href={item.href}>
              <div 
                className={cn(
                  "relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 cursor-pointer group",
                  isActive ? "text-cyan-400" : "text-slate-400 hover:text-cyan-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={cn("w-5 h-5 md:w-6 md:h-6 mb-1 relative z-10", isActive && "drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]")} />
                <span className="text-[10px] md:text-xs font-medium relative z-10">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
