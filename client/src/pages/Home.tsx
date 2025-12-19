import { Hero } from "@/components/Hero";
import { FeatureProject } from "@/components/FeatureProject";
import { CodeTerminal } from "@/components/Terminal";
import { Navbar } from "@/components/Navbar";
import { useSkills } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Book, Code, Database, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { data: skills } = useSkills();

  // Group skills manually if API returns flat list, or use as is
  const languages = skills?.filter(s => s.category === "Languages") || [];
  const aiMl = skills?.filter(s => s.category === "AI/ML") || [];
  const web = skills?.filter(s => s.category === "Web") || [];

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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-slate-400">Tools and technologies I use to build the future</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard title="Languages" icon={Code} skills={languages} delay={0} />
            <SkillCard title="AI & Machine Learning" icon={Book} skills={aiMl} delay={0.2} featured />
            <SkillCard title="Full Stack Web" icon={Server} skills={web} delay={0.4} />
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section className="py-20 px-4 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Algorithmic Mastery</h2>
          <p className="text-slate-400 mb-8">
            Solving complex problems with optimized solutions. <br/>
            Strong grasp of Data Structures and Algorithms.
          </p>
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
            PUBLICATION
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">IEEE Research Contribution</h2>
          <p className="text-slate-300 mb-6 leading-relaxed text-lg">
            Contributing to the scientific community with research on "Optimized CNN Architectures for Medical Imaging." 
            This paper explores novel approaches to reducing false positives in X-ray diagnostics using ensemble learning methods.
          </p>
          <button className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white">
            Read Abstract
          </button>
        </div>
      </section>

      <footer className="text-center text-slate-500 text-sm py-8">
        <p>© {new Date().getFullYear()} Sumanth. Built with React, Tailwind & Deep Learning.</p>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon: Icon, skills, delay, featured }: { title: string, icon: any, skills: any[], delay: number, featured?: boolean }) {
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
        {skills.length > 0 ? skills.map((skill) => (
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
        )) : (
          // Fallback if data hasn't loaded or DB is empty
          ["Java", "Python", "C++"].map(s => (
             <span key={s} className="px-3 py-1 rounded-md text-sm font-medium bg-slate-800/50 border border-slate-700 text-slate-500">
               {s}
             </span>
          ))
        )}
      </div>
    </motion.div>
  );
}
