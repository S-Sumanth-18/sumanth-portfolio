import React from 'react';
import { Hero } from "../components/Hero";
import { FeatureProject } from "../components/FeatureProject";
import { CodeTerminal } from "../components/Terminal";
import { Navbar } from "../components/Navbar";
import { SKILLS, type Skill } from "../lib/data";
import { motion } from "framer-motion";
import { Book, Code, Database, Server } from "lucide-react";
import { cn } from "../lib/utils";

export default function Home() {
  const skills = SKILLS;

  const languages = skills?.filter(s => s.category === "Languages") || [];
  const ui = skills?.filter(s => s.category === "UI") || [];
  const tooling = skills?.filter(s => s.category === "Tooling") || [];

  return (
    <div className="min-h-screen bg-background pb-32">
      <Navbar />
      <Hero />
      <FeatureProject />
      
      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technologies in This Portfolio</h2>
            <p className="text-slate-400">A snapshot of the tools used in this site's codebase.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard title="Languages" icon={Code} skills={languages} delay={0} />
            <SkillCard title="UI" icon={Server} skills={ui} delay={0.2} featured />
            <SkillCard title="Libraries & Tooling" icon={Database} skills={tooling} delay={0.4} />
          </div>
        </div>
      </section>

      {/* Code sample section */}
      <section className="py-20 px-4 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Code Sample</h2>
          <p className="text-slate-400 mb-8">
K.N.I.G.H.T. core initialization protocol — powering Sumanth's personal command system.          </p>
          <CodeTerminal />
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Book className="w-32 h-32" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4 border border-blue-500/30">
            DETAILS NEEDED
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Research & Publications</h2>
          <p className="text-slate-300 mb-6 leading-relaxed text-lg">
            No verified research or publication details have been provided yet. Add a title, venue, status, and link here if applicable.
          </p>
        </div>
      </section>

      <footer className="text-center text-slate-500 text-sm py-8">
        <p>© {new Date().getFullYear()} Sumanth · B.Tech IT Student · Built with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon: Icon, skills, delay, featured }: { title: string, icon: React.ComponentType<{ className?: string }>, skills: Skill[], delay: number, featured?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        "p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
        featured 
          ? "bg-cyan-900/10 border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]" 
          : "glass-card border-white/5 hover:border-white/10"
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={cn("p-2 rounded-lg", featured ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-400")}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.id} 
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium border",
              featured 
                ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" 
                : "bg-slate-800/50 border-slate-700 text-slate-300"
            )}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}