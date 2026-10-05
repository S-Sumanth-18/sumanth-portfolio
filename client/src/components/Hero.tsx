import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl w-full space-y-8 text-center md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            B.Tech IT Student
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-gradient">Sumanth</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-slate-300 font-light font-display">
            Information Technology Student
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg text-slate-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I'm a B.Tech IT student using this portfolio to document projects I build and the technologies present in my work.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/projects" className="w-full sm:w-auto group relative px-8 py-3 rounded-lg bg-cyan-500 text-slate-900 font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="flex items-center justify-center gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          
          <Link href="/contact" className="w-full sm:w-auto px-8 py-3 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all text-slate-300 hover:text-cyan-400 font-medium flex items-center justify-center">
            Contact Me
          </Link>
        </motion.div>

        <motion.div 
          className="flex gap-6 pt-8 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="flex items-center gap-2 text-slate-500" title="GitHub profile URL not provided">
            <Github className="w-6 h-6" />
            <span className="text-xs">GitHub URL not provided</span>
          </span>
          <span className="flex items-center gap-2 text-slate-500" title="LinkedIn profile URL not provided">
            <Linkedin className="w-6 h-6" />
            <span className="text-xs">LinkedIn URL not provided</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
