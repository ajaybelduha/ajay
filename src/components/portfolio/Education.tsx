import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, Percent } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    // {
    //   degree: "Master of Business Administration (M.B.A)",
    //   field: "IT & IB",
    //   institution: "Lucknow Institute of Technology, Lucknow",
    //   period: "2024 – 2026",
    //   score: "80.24%"
    // },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Seth Vishambhar Nath Institute of Engineering & Technology",
      period: "2019 – 2022",
      score: "78.01%",
    },
    {
      degree: "Diploma",
      field: "Computer Science & Engineering",
      institution: "Government Polytechnic, Shahjahanpur",
      period: "2015 – 2018",
      score: "80%",
    },
  ];

  const certifications = [
    {
      name: "Apprenticeship in Web Development",
      // issuer: "Techpile Technology Pvt. Ltd."
      issuer: "Lucknow, IN.",
    },
    {
      name: "CCC Certification",
      issuer: "NIELIT",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 md:py-32 bg-slate-50"
      ref={ref}
      aria-labelledby="education-heading"
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
              Background
            </span>
            <h2
              id="education-heading"
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Education & Certifications
            </h2>
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
              aria-hidden="true"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <GraduationCap
                    className="w-5 h-5 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.article
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group relative p-6 bg-white/85 backdrop-blur-2xl rounded-[1.5rem] border border-white/90 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    {/* Glossy overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-medium">{edu.field}</p>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                        <Percent className="w-3 h-3" aria-hidden="true" />
                        {edu.score}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time>{edu.period}</time>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Award
                    className="w-5 h-5 text-amber-600"
                    aria-hidden="true"
                  />
                </div>
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.article
                    key={cert.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.02, x: -4 }}
                    className="group relative p-6 bg-white/85 backdrop-blur-2xl rounded-[1.5rem] border border-white/90 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-transparent rounded-bl-[1.5rem]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 relative z-10">
                      {cert.name}
                    </h4>
                    <p className="text-slate-500 text-sm relative z-10">
                      {cert.issuer}
                    </p>
                  </motion.article>
                ))}
              </div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white border border-white/10 shadow-2xl overflow-hidden"
              >
                {/* Glossy overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold mb-4">Languages</h3>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                    Hindi
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                    English
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
