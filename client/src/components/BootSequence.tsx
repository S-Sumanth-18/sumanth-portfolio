import { useEffect, useState } from "react";
import { Activity, Cpu, ShieldCheck, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const bootMessages = [
  "INITIALIZING SYSTEM...",
  "AUTHENTICATING USER...",
  "SECURE CONNECTION ESTABLISHED",
  "LOADING CORE MODULES...",
  "NEURAL SYSTEM ONLINE",
  "K.N.I.G.H.T. CORE INITIALIZED",
  "SYSTEM READY",
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const increment = prefersReducedMotion ? 4 : 2;
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + increment, 100);
        if (next === 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setIsClosing(true), 120);
        }
        return next;
      });
    }, prefersReducedMotion ? 24 : 34);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const visibleMessages = Math.min(
    bootMessages.length,
    Math.floor((progress / 100) * bootMessages.length) + 1,
  );

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="K.N.I.G.H.T. system initializing"
      initial={{ opacity: 1 }}
      animate={{ opacity: isClosing ? 0 : 1 }}
      transition={{ duration: prefersReducedMotion ? 0.12 : 0.38, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isClosing) onComplete();
      }}
      className="boot-screen fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#070d17] px-5 py-8 text-slate-100"
    >
      <div aria-hidden="true" className="boot-grid absolute inset-0 opacity-30" />
      <div aria-hidden="true" className="boot-scan absolute inset-x-0 top-0 h-32 opacity-30" />

      <div className="relative z-10 w-full max-w-2xl">
        <header className="mb-10 flex items-center justify-between border-b border-cyan-400/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-cyan-300/30 bg-cyan-400/10 text-cyan-300">
              <Cpu className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-sm tracking-[0.18em] text-cyan-200">K.N.I.G.H.T.</p>
              <p className="mt-1 font-mono text-[10px] text-slate-500">PERSONAL SYSTEM INTERFACE</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] text-slate-500 sm:flex">
            <ShieldCheck className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            LOCAL SESSION
          </div>
        </header>

        <div className="mb-8 flex items-center gap-3 text-cyan-300">
          <Activity className="h-4 w-4 animate-pulse" aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.16em]">BOOT SEQUENCE / 01</span>
        </div>

        <div className="min-h-[190px] space-y-3 font-mono text-xs sm:text-sm" aria-hidden="true">
          {bootMessages.slice(0, visibleMessages).map((message, index) => {
            const isCurrent = index === visibleMessages - 1 && progress < 100;
            return (
              <motion.p
                key={message}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                className={isCurrent ? "text-cyan-200" : "text-slate-500"}
              >
                <span className="mr-3 text-cyan-500">{isCurrent ? ">" : "+"}</span>
                {message}
                {isCurrent && <span className="ml-1 animate-pulse">_</span>}
              </motion.p>
            );
          })}
        </div>

        <div className="border-t border-cyan-400/20 pt-5">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-2"><Terminal className="h-3.5 w-3.5" aria-hidden="true" /> Core initialization</span>
            <span>{progress}%</span>
          </div>
          <div
            role="progressbar"
            aria-label="System initialization progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            className="h-1 overflow-hidden bg-slate-800"
          >
            <motion.div
              className="h-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.75)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.12, ease: "linear" }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsClosing(true)}
          className="mt-8 min-h-11 border border-slate-700 px-4 font-mono text-xs text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Skip initialization
        </button>
      </div>
    </motion.div>
  );
}