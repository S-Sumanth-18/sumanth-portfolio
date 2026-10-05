import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pb-32 pt-24 px-4 flex items-center justify-center relative overflow-hidden">
      <Navbar />
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in <br/><span className="text-cyan-400">Touch</span></h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Contact details have not been provided yet. Add a preferred email address or public profile links below.
          </p>
          
          <div className="space-y-5">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium">[Add preferred email address]</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 gap-1">
                <Github className="w-4 h-4 text-cyan-400" />
                <Linkedin className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Social Profiles</p>
                <p className="font-medium">[Add GitHub and LinkedIn URLs]</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Resume</p>
                <p className="font-medium">[Add a public resume link, if applicable]</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="space-y-6">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Message form not configured</h2>
              <p className="text-slate-400 leading-relaxed">
                This project has no email address or form endpoint configured, so messages cannot be sent from this page. Add a working email link or connect a form service before enabling contact submissions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
