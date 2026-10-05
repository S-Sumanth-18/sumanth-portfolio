import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { PROJECTS, type Project } from "../lib/data";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

export default function Projects() {
  const projects = PROJECTS;
  const isLoading = false;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background pb-32 pt-24 px-4">
      <Navbar />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">All Projects</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Work listed here is limited to projects with details available in this portfolio.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-2xl bg-slate-800/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, idx: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/20 focus-within:border-cyan-400/40 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900/80 flex flex-col items-center justify-center gap-3 text-slate-400">
                      <Code2 className="w-10 h-10 text-cyan-400" />
                      <span className="text-sm">Project preview not provided</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-20">
                    {project.isFeatured && (
                      <span className="px-2 py-1 rounded bg-cyan-500 text-slate-900 text-xs font-bold shadow-lg">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {/* FIXED LINE 47 BELOW */}
                    {(project.techStack || []).slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        {tech}
                      </span>
                    ))}
                    {(project.techStack?.length || 0) > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        +{(project.techStack?.length || 0) - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer" 
                        className="flex-1 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    )}
                    {!project.githubUrl && !project.demoUrl && (
                      <p className="text-xs text-slate-500">Repository and live demo URLs not provided.</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 border border-cyan-400/20 bg-cyan-400/5 px-3 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-300/50 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Info className="h-4 w-4" aria-hidden="true" />
                    Inspect project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
        {selectedProject && (
          <DialogContent className="max-h-[85dvh] w-[calc(100%-1.25rem)] max-w-2xl overflow-y-auto border-cyan-400/20 bg-[#080f1c] text-slate-100">
            <DialogHeader className="pr-8 text-left">
              <p className="font-mono text-[10px] tracking-[0.18em] text-cyan-400">PROJECT FILE / {String(selectedProject.id).padStart(2, "0")}</p>
              <DialogTitle className="mt-2 text-2xl font-bold sm:text-3xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="pt-2 text-sm leading-relaxed text-slate-400">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <section className="mt-5" aria-labelledby="project-stack-heading">
              <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 id="project-stack-heading" className="font-mono text-xs tracking-wider text-slate-300">TECH STACK</h3>
                <span className="font-mono text-[10px] text-slate-600">{selectedProject.techStack.length} VERIFIED</span>
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {selectedProject.techStack.map((technology, technologyIndex) => (
                  <li key={technology} className="flex min-h-11 items-center gap-3 border border-slate-800 bg-slate-900/60 px-3 text-sm text-slate-300 transition-colors hover:border-cyan-400/30">
                    <span className="font-mono text-[10px] text-cyan-500/70">{String(technologyIndex + 1).padStart(2, "0")}</span>
                    {technology}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-slate-700 px-4 text-sm transition-colors hover:border-cyan-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  <Github className="h-4 w-4" aria-hidden="true" /> Source code
                </a>
              )}
              {selectedProject.demoUrl && (
                <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-cyan-400 px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
                </a>
              )}
              {!selectedProject.githubUrl && !selectedProject.demoUrl && (
                <p className="font-mono text-xs text-slate-500">No public repository or live demo is listed for this project.</p>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}