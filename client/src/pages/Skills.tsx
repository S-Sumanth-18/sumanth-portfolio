import { Navbar } from "../components/Navbar";
import { useSkills } from "../hooks/use-content";
import { motion } from "framer-motion";

export default function Skills() {
  const { data: skills } = useSkills();
  
  const categories = [
    { id: "Languages", label: "Languages", desc: "Languages used in this site's source" },
    { id: "UI", label: "UI", desc: "Interface libraries used in this site" },
    { id: "Tooling", label: "Libraries & Tooling", desc: "Build and interface tools in this codebase" }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Technical Arsenal</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies present in this site's source code. This list does not represent proficiency ratings.
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
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">{skill.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Used in this portfolio</p>
                    </motion.div>
                  )) : (
                    <p className="col-span-full text-sm text-slate-500">No technologies verified for this category yet.</p>
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
