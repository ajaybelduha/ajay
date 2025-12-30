import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, ChevronDown } from 'lucide-react';
import AjayImage from "@/assets/images/Ajay-FullStack.jpeg"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      role="banner"
      aria-label="Introduction"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-sm text-white font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Ajay Kumar
            </h1>

            {/* Title */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-semibold mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sr. Full Stack Developer
            </motion.p>

            {/* Location */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-300 mb-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Gurgaon, India</span>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {['MERN', 'Node.js', 'React.js', 'Microservices', 'Micro-frontend', 'AWS Cloud', 'Accessibility'].map((tech, index) => (
                <span 
                  key={`tech-${tech}-${index}`}
                  className="px-4 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Contact links */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="tel:+919140143212" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                aria-label="Call Ajay at +91 9140 143 212"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-sm">+91 9140 143 212</span>
              </a>
              <a 
                href="mailto:ajaybelduha@gmail.com" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                aria-label="Email Ajay at ajaybelduha@gmail.com"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-sm">ajaybelduha@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/ajaybelduha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                aria-label="Visit Ajay's LinkedIn profile (opens in new tab)"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 border border-white/20 cursor-pointer"
              >
                Get In Touch
              </button>
              <button 
                // variant="outline"
                onClick={() => scrollToSection('experience')}
                className="px-8 py-4 text-base font-semibold bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 rounded-full transition-all duration-300 shadow-lg cursor-pointer hover:shadow-2xl hover:shadow-white/10"
              >
                View Experience
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative blur circles */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl" />
            </div>
            
            {/* Image container with glassmorphism */}
            <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl">
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-slate-900/50">
                <img 
                  src={AjayImage}
                  alt="Ajay Kumar - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute z-11 -bottom-6 right-6 px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6.5+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
}