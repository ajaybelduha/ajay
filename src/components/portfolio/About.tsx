import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Users } from "lucide-react";
import LazyImage from "@/components/ui/LazyImage";
import AjayImage from "@/assets/images/Ajay-Kumar.jpeg"

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "6.5+ Years", description: "Development Experience" },
    { icon: Server, label: "Full Stack", description: "Frontend & Backend" },
    { icon: Cloud, label: "AWS Cloud", description: "Certified Deployments" },
    { icon: Users, label: "Team Lead", description: "Mentoring Developers" },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white"
      ref={ref}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Crafting Digital Experiences
            </h2>
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main image with glassmorphism */}
              <div className="relative">
                {/* Decorative elements */}
                <div
                  className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />

                {/* Image container */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30">
                  <div className="relative overflow-hidden rounded-3xl">
                    <LazyImage
                      src={AjayImage}
                      alt="Ajay Kumar"
                      className="w-full h-auto"
                    />
                    {/* Glossy overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Code2
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        100+
                      </div>
                      <div className="text-sm text-slate-500">Projects</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12"
              >
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Full Stack Developer with{" "}
                  <span className="text-slate-900 font-semibold">
                    6.5+ years
                  </span>{" "}
                  of experience building and maintaining web applications using
                  React.js and Node.js. Experienced in designing REST APIs,
                  implementing CI/CD pipelines, and deploying services on AWS.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  I work in Agile teams, mentor junior developers, and focus on
                  creating
                  <span className="text-slate-900 font-semibold">
                    {" "}
                    reliable and maintainable systems
                  </span>
                  . Currently expanding my backend expertise with Python while
                  delivering high-impact solutions for enterprise clients.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Passionate about{" "}
                  <span className="text-slate-900 font-semibold">
                    web accessibility
                  </span>
                  , performance optimization, and building applications that
                  make a real difference.
                </p>
              </motion.div>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group relative p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Glossy gradient background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
