import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { BookOpen, FileText, Download } from "lucide-react";

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
            Exploring the frontiers of Deep Learning and Medical Imaging.
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
                IEEE CONFERENCE 2024 (PENDING)
              </span>
              <span className="text-slate-500 font-mono">Paper ID: IEEE-CV-2024-892</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              Optimized Convolutional Neural Networks for Automated Pneumonia Detection in Chest Radiography
            </h2>

            <div className="space-y-6 text-slate-300 mb-8">
              <p>
                <strong className="text-white">Abstract:</strong> This paper proposes a novel ensemble architecture combining ResNet152V2 and DenseNet121 for high-accuracy pneumonia detection from chest X-ray images. 
                We introduce a custom preprocessing pipeline that enhances lung opacity features and reduces rib cage interference.
              </p>
              <p>
                Our method achieves a state-of-the-art accuracy of 96.4% on the RSNA Pneumonia Detection Challenge dataset, outperforming standalone EfficientNetB0 baselines by 4.2%. 
                Furthermore, we integrate Gradient-weighted Class Activation Mapping (Grad-CAM) to provide visual explainability for clinical practitioners.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
              <button className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Read Full Paper
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
