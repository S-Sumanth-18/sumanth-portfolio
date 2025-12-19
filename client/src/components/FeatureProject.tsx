import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Activity, Upload, Eye, Brain, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const performanceData = [
  { name: 'EfficientNetB0', accuracy: 90, color: '#3b82f6' },
  { name: 'DenseNet121', accuracy: 92, color: '#06b6d4' },
  { name: 'ResNet152V2', accuracy: 96, color: '#00ffff' },
];

export function FeatureProject() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | string>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);
    // Simulate ML processing delay
    setTimeout(() => {
      setAnalyzing(false);
      setResult("Pneumonia Detected (Confidence: 98.4%)");
      setShowHeatmap(true);
    }, 2500);
  };

  return (
    <section className="py-24 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Featured Project</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">AI-Driven Smart Healthcare Framework</h2>
          <p className="text-slate-400 max-w-2xl">
            An advanced diagnostic tool leveraging deep learning to detect Pneumonia from Chest X-Rays with high precision.
            Integrating XAI (Explainable AI) through Grad-CAM to visualize the model's decision-making process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Demo Area */}
          <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                Live Diagnostic Demo
              </h3>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-slate-400 font-mono">MODEL READY</span>
              </div>
            </div>

            <div className="relative aspect-video bg-black/40 rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center mb-6 overflow-hidden">
              {analyzing ? (
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                  <p className="text-cyan-400 font-mono text-sm animate-pulse">Running ResNet152V2 Inference...</p>
                </div>
              ) : result ? (
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                  {/* Lung Image Placeholder - using unpslash for demo */}
                  {/* chest x-ray medical image */}
                  <img 
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800" 
                    alt="X-Ray Scan"
                    className="w-full h-full object-cover opacity-80" 
                  />
                  
                  {/* Grad-CAM Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showHeatmap ? 0.6 : 0 }}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/50 to-yellow-500/30 mix-blend-overlay"
                  />
                  
                  <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-lg border-l-4 border-cyan-500 flex justify-between items-center">
                    <div>
                      <p className="text-white font-bold">{result}</p>
                      <p className="text-xs text-slate-300">Analysis complete in 142ms</p>
                    </div>
                    <button 
                      onClick={() => setShowHeatmap(!showHeatmap)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      title="Toggle Heatmap"
                    >
                      <Eye className={cn("w-5 h-5", showHeatmap ? "text-cyan-400" : "text-slate-400")} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8">
                  <Upload className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400 mb-4">Upload Chest X-Ray DICOM/JPEG</p>
                  <button 
                    onClick={handleAnalyze}
                    className="px-6 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg transition-all"
                  >
                    Run Sample Analysis
                  </button>
                </div>
              )}
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 transition-colors border border-white/5">
                <Github className="w-4 h-4" /> Source Code
              </button>
              <button className="flex-1 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-900/50">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </button>
            </div>
          </div>

          {/* Metrics & Tech Stack */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Model Performance Comparison
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      cursor={{fill: 'transparent'}}
                    />
                    <Bar dataKey="accuracy" radius={[0, 4, 4, 0]} barSize={20}>
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "React", "D3.js"].map((tech) => (
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
