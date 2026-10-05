import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen bg-background pb-32 pt-24 px-4">
      <Navbar />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-cyan-500/10 mb-6">
            <BookOpen className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Publications</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Only verified research details belong here. No publication information has been provided yet.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] group-hover:bg-cyan-500/10 transition-colors" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold">
                DETAILS NEEDED
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              No research or publications listed
            </h2>

            <div className="space-y-6 text-slate-300 mb-8">
              <p>
                No verified research or publication details were found in the project files. Add the title, venue, publication status, and a public link here if applicable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
