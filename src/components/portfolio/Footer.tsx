import { Heart, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import LazyImage from '@/components/ui/LazyImage';
import AjayImage from "@/assets/images/Ajay-Kumar.jpeg"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 overflow-hidden" role="contentinfo">
      {/* Glassmorphic background effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/40 shadow-lg">
                <LazyImage 
                  src={AjayImage}
                  alt="Ajay Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Ajay Kumar<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              © {currentYear} • Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" aria-hidden="true" /> in India
            </p>
          </motion.div>

          {/* Social links with glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="tel:+919140143212"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg"
              aria-label="Call Ajay"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <Phone className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors relative z-10" />
            </motion.a>
            
            <motion.a
              href="mailto:ajaybelduha@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg"
              aria-label="Email Ajay"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <Mail className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors relative z-10" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/ajaybelduha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl flex items-center justify-center hover:from-blue-500/30 hover:to-indigo-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-500/20"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <Linkedin className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors relative z-10" />
            </motion.a>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-green-400" aria-hidden="true" />
            </motion.div>
            <span className="text-sm text-slate-300 font-medium">Available for work</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}