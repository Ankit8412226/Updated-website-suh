"use client";
import { motion } from "framer-motion";
import { Cloud, Code, Database, Layers, Lock, Server, Smartphone, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

// Tech categories data
const techCategories = [
  {
    name: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: "Responsive, interactive user interfaces.",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    description: "Robust, scalable server-side systems.",
    technologies: ["Node.js", "Python", "Java", "Go", "GraphQL"],
  },
  {
    name: "Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    description: "Secure, optimized data storage & retrieval.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    description: "Native & cross-platform mobile apps.",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"],
  },
  {
    name: "Cloud",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    description: "Scalable infrastructure & automated CI/CD.",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    name: "Security",
    icon: Lock,
    color: "from-red-500 to-pink-500",
    description: "End-to-end protection & compliance.",
    technologies: ["OAuth", "JWT", "SSL/TLS", "Encryption", "Firewall"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Ecosystem() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 lg:py-32 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Layers className="w-4 h-4" />
            Tech Ecosystem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Full-Stack <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Solutions Mastery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            We leverage a comprehensive suite of modern technologies to build scalable, secure, and high-performance digital products.
          </motion.p>
        </div>

        {/* Central Animation & Grid */}
        <div className="relative">

          {/* Central Pulsing Core (Decorative Background for Grid) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {techCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                variants={item}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
              >
                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <category.icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br ${category.color} stroke-[2.5px]`} style={{ stroke: `url(#gradient-${idx})` }} />
                    {/* SVG Gradient Definition for Icons */}
                    <svg width="0" height="0">
                      <linearGradient id={`gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop stopColor={idx % 2 === 0 ? '#a855f7' : '#3b82f6'} offset="0%" />
                        <stop stopColor={idx % 2 === 0 ? '#ec4899' : '#06b6d4'} offset="100%" />
                      </linearGradient>
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                    {category.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => router.push('/services')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            <Zap className="w-5 h-5" />
            Explore All Capabilities
          </button>
        </motion.div>

      </div>
    </section>
  );
}
