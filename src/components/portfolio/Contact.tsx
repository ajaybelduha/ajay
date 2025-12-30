import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9140 143 212",
      href: "tel:+919140143212",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ajaybelduha@gmail.com",
      href: "mailto:ajaybelduha@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/ajaybelduha",
      href: "https://linkedin.com/in/ajaybelduha",
      external: true,
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurgaon, India",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-6" aria-hidden="true" />
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group relative block p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 h-full overflow-hidden"
                    aria-label={`${method.label}: ${method.value}${method.external ? ' (opens in new tab)' : ''}`}
                  >
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="text-slate-500 text-sm mb-1">{method.label}</p>
                    <p className="text-white font-medium flex items-center gap-2">
                      {method.value}
                      {method.external && <ExternalLink className="w-4 h-4 opacity-50" aria-hidden="true" />}
                    </p>
                  </a>
                ) : (
                  <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" aria-hidden="true" />
                    <div className={`relative z-10 w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <method.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="relative z-10 text-slate-400 text-sm mb-1">{method.label}</p>
                    <p className="relative z-10 text-white font-medium">{method.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <a 
              href="mailto:ajaybelduha@gmail.com?subject=Let's%20Connect"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              Send me an email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}