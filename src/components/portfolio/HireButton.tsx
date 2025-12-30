import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HireButton({ onClick, className = "" }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-500 cursor-pointer ${className}`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500" />

      {/* Glossy overlay - iOS style */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        aria-hidden="true"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />

      {/* Border with glassmorphism */}
      <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors duration-500" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <Sparkles className="w-5 h-5" aria-hidden="true" />
        </motion.div>

        <span className="text-base font-bold tracking-wide">Hire Me</span>

        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </span>

      {/* Particle effect overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      >
        <motion.div
          className="absolute top-2 left-1/4 w-1 h-1 bg-white rounded-full"
          animate={{
            y: [0, -20, -40],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
        />
        <motion.div
          className="absolute top-2 right-1/4 w-1 h-1 bg-white rounded-full"
          animate={{
            y: [0, -20, -40],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
        />
      </div>
    </motion.button>
  );
}
