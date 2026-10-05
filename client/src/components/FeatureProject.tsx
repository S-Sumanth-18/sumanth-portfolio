import { ArrowRight, Code2, Layers3, Monitor } from "lucide-react";
import { Link } from "wouter";
import { PROJECTS } from "../lib/data";

export function FeatureProject() {
  const project = PROJECTS[0];

  return (
    <section className="py-24 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Featured Project</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h2>
          <p className="text-slate-400 max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Project Overview
              </h3>
              <span className="text-xs text-slate-400 font-mono">CURRENT SITE</span>
            </div>

            <div className="relative aspect-video bg-black/40 rounded-xl border border-slate-700 flex flex-col justify-between mb-6 overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />
              <div className="relative flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                SUMANTH / PORTFOLIO
              </div>
              <div className="relative">
                <Monitor className="w-8 h-8 text-cyan-400 mb-3" />
                <p className="text-white font-bold text-lg">Responsive portfolio website</p>
                <p className="text-slate-400 text-sm">React · TypeScript · Tailwind CSS</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link href="/projects" className="flex-1 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-900/50">
                Project Details <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="flex-1 py-3 rounded-lg bg-slate-800/60 flex items-center justify-center text-center text-xs text-slate-400 border border-white/5">
                Source URL not provided
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Layers3 className="w-5 h-5 text-cyan-400" />
                Pages in this site
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Home", "Projects", "Skills", "Research", "Contact"].map((page) => (
                  <span key={page} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700">
                    {page}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold mb-4">Technologies used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
