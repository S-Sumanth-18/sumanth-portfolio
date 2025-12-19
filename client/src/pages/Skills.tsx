import { Navbar } from "@/components/Navbar";
import { useSkills } from "@/hooks/use-content";
import { motion } from "framer-motion";

export default function Skills() {
  const { data: skills } = useSkills();
  
  const categories = [
    { id: "AI/ML", label: "Artificial Intelligence", desc: "Building intelligent systems with Deep Learning" },
    { id: "Languages", label: "Programming Languages", desc: "Core languages for robust development" },
    { id: "Web", label: "Full Stack Web", desc: "Modern web technologies and frameworks" }
  ];

  return (
    <div className="min-h-screen bg-background pb-32 pt-24 px-4">
      <Navbar />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Skills Matrix</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical capabilities and proficiency levels.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, catIdx) => {
            const catSkills = skills?.filter(s => s.category === cat.id) || [];
            
            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.2 }}
                className="relative"
              >
                <div className="flex items-end gap-4 mb-8 border-b border-slate-800 pb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{cat.label}</h2>
                  <span className="text-slate-500 pb-1 hidden md:inline-block">{cat.desc}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {catSkills.length > 0 ? catSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.id}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 transition-colors group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-lg">{skill.name}</span>
                        <span className="text-xs text-slate-500 font-mono">{skill.proficiency}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-1000"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </motion.div>
                  )) : (
                    // Fallback for visual completeness if DB empty
                    [1, 2, 3, 4].map(i => (
                       <div key={i} className="glass-card p-4 rounded-xl border border-white/5 opacity-50">
                         <div className="h-6 w-24 bg-slate-800 rounded mb-2 animate-pulse" />
                         <div className="h-1.5 w-full bg-slate-800 rounded-full" />
                       </div>
                    ))
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
