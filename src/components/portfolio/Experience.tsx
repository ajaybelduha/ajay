import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "LearningMate",
      location: "Mumbai",
      role: "Sr. Software Engineer",
      period: "Jun 2024 – Present",
      current: true,
      highlights: [
        "Led frontend and backend development for a modular learning platform with React.js and Node.js",
        "Implemented reusable components, REST APIs, and automated CI/CD deployments to AWS",
        "Own architecture decisions and code reviews; collaborate with QA and product teams in Agile sprints",
        "Mentor junior developers and drive improvements in code quality and test coverage",
      ],
    },
    {
      company: "LearningMate",
      location: "Mumbai (Mobile Programming payroll)",
      role: "Full Stack Developer",
      period: "Dec 2022 – Jun 2024",
      highlights: [
        "Built and optimized React + Node.js applications, improving maintainability and frontend responsiveness",
        "Integrated third-party services and designed backend endpoints in Node.js/Express",
        "Contributed to automation and deployment workflows on AWS; supported monitoring and incident response",
      ],
    },
    {
      company: "Trivialworks Solutions",
      location: "Lucknow",
      role: "Full Stack Developer",
      period: "Mar 2022 – Sep 2022",
      highlights: [
        "Developed a CRM platform with multi-vendor roles and access controls using React and Node.js",
        "Implemented CI/CD pipelines and automated deployments to AWS",
        "Supervised and mentored junior developers; guided technical decisions around performance and scaling",
      ],
    },
    {
      company: "Synch Soft Technologies",
      location: "Lucknow",
      role: "Software Developer",
      period: "Jan 2021 – Mar 2022",
      highlights: [
        "Designed and implemented customer-facing websites using Vue.js, Nuxt.js, and Python",
        "Integrated payment gateways and REST APIs; handled deployments and runtime debugging",
        "Implemented performance and security improvements",
      ],
    },
    {
      company: "Barrownz Group",
      location: "Lucknow",
      role: "Software Developer",
      period: "Feb 2019 – Nov 2020",
      highlights: [
        "Built and customized React and Node.js web applications",
        "Improved website reliability and security, reducing downtime by 30%",
        "Delivered bug fixes and enhancements while collaborating with stakeholders",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-white"
      ref={ref}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Career Journey
            </span>
            <h2
              id="experience-heading"
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Professional Experience
            </h2>
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-200 md:-translate-x-1/2"
              aria-hidden="true"
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg md:-translate-x-1/2 top-0 ${
                    exp.current ? "bg-blue-500" : "bg-slate-400"
                  }`}
                  aria-hidden="true"
                />

                {/* Content card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"
                  }`}
                >
                  <article className="group relative p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                    {/* Glossy gradient overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />

                    {exp.current && (
                      <span className="absolute -top-3 right-6 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg border border-white/30">
                        Current
                      </span>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600 mt-1">
                          <Building2 className="w-4 h-4" aria-hidden="true" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time>{exp.period}</time>
                    </div>

                    <ul className="space-y-2" role="list">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-slate-600 text-sm"
                        >
                          <ChevronRight
                            className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
