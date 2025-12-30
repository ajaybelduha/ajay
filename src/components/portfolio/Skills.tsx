import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React.js",
        "Vue.js",
        "Nuxt.js",
        "Redux",
        "PWA",
        "Micro-frontend",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      color: "from-emerald-500 to-teal-500",
      skills: [
        "Node.js",
        "Express.js",
        "Fastify",
        "PHP",
        "Laravel",
        "Python",
        "REST APIs",
      ],
    },
    {
      title: "Database",
      color: "from-violet-500 to-purple-500",
      skills: ["MySQL", "PostgreSQL", "SQL Queries", "Stored Procedures"],
    },
    {
      title: "Cloud & DevOps",
      color: "from-orange-500 to-amber-500",
      skills: ["AWS EC2", "AWS S3", "AWS DNS", "CI/CD", "Git", "Bitbucket"],
    },
    {
      title: "Tools & Testing",
      color: "from-rose-500 to-pink-500",
      skills: [
        "Webpack",
        "jQuery",
        "Unit Testing",
        "E2E Testing",
        "Logging",
        "Debugging",
        "Payment Gateway",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-slate-950"
      ref={ref}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Expertise
            </span>
            <h2
              id="skills-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Technical Skills
            </h2>
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 overflow-hidden"
              >
                {/* Glassmorphism overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                {/* Gradient accent with glassmorphism */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-t-3xl shadow-lg`}
                  aria-hidden="true"
                />

                <h3 className="relative z-10 text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>

                <div
                  className="relative z-10 flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-1.5 text-sm text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                      role="listitem"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Accessibility highlight with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 p-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl relative overflow-hidden"
          >
            {/* Glossy effect overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Web Accessibility Specialist
                </h3>
                <p className="text-slate-200">
                  Building inclusive digital experiences following WCAG
                  guidelines
                </p>
              </div>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold shadow-lg">
                A11y Focused
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
