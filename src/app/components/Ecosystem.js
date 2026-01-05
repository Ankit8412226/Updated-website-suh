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
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Connecting Lines with Animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              {/* Gradient for lines - Light Mode */}
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
              </linearGradient>

              {/* Gradient for lines - Dark Mode */}
              <linearGradient id="lineGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
              </linearGradient>

              {/* Animated gradient for flow effect */}
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
                </stop>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
                </stop>
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background connection lines */}
            {techCategories.map((_, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              // Frontend (0) and Mobile (3) use 45%, others use 42%
              const radius = (index === 0 || index === 3) ? 45 : 42;
              const x1 = 50; // Center point
              const y1 = 50;
              const x2 = 50 + radius * Math.cos(angle); // Card center point
              const y2 = 50 + radius * Math.sin(angle);

              return (
                <g key={`line-group-${index}`}>
                  {/* Base line */}
                  <motion.line
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5 + index * 0.12,
                      ease: "easeOut"
                    }}
                    filter="url(#glow)"
                  />

                  {/* Animated flow line */}
                  <motion.line
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#flowGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="15,85"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0, 0.9, 0],
                      strokeDashoffset: [0, -100]
                    }}
                    transition={{
                      pathLength: { duration: 1.2, delay: 0.5 + index * 0.12 },
                      opacity: { duration: 2.5, repeat: Infinity, delay: index * 0.35 },
                      strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.35 }
                    }}
                    filter="url(#glow)"
                  />

                  {/* Particle dots traveling along lines */}
                  <motion.circle
                    r="4"
                    fill="#a855f7"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [`${x1}%`, `${x2}%`, `${x1}%`],
                      cy: [`${y1}%`, `${y2}%`, `${y1}%`],
                      opacity: [0, 1, 0.9, 0],
                      r: [3, 4, 3]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: index * 0.55,
                      ease: "easeInOut"
                    }}
                    filter="url(#glow)"
                  />
                </g>
              );
            })}

            {/* Orbital rings for depth */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="42%"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="8,8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </svg>

          {/* Tech Category Nodes - Orbital Layout */}
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            const angle = (index * 60 - 90) * (Math.PI / 180); // 360/6 = 60 degrees apart
            // Frontend (0) and Mobile (3) use 45%, others use 42%
            const radius = (index === 0 || index === 3) ? 45 : 42;
            // Move Cloud (4) and Security (5) slightly left and upward
            // Move Frontend (0) and Mobile (3) slightly left
            const xOffset = (index === 4 || index === 5) ? -2 : (index === 0 || index === 3) ? -2 : 0;
            // Move Cloud (4) and Security (5) upward, also move Frontend (0), Backend (1), and Database (2) upward
            const yOffset = (index === 4 || index === 5) ? -3 : (index === 0 || index === 1 || index === 2) ? -2 : 0;
            const x = 50 + radius * Math.cos(angle) + xOffset;
            const y = 50 + radius * Math.sin(angle) + yOffset;

            // Determine tooltip position based on node location
            const isTop = y < 50;
            const tooltipPosition = isTop ? 'bottom' : 'top';

            return (
              <motion.div
                key={index}
                className="absolute group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ zIndex: 9999 }}
              >
                <div className="relative cursor-pointer">
                  {/* Connection Point Glow */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${category.color} blur-2xl`} />
                  </motion.div>

                  {/* Compact Node */}
                  <motion.div
                    className={`relative bg-white/98 dark:bg-gray-900/98 rounded-2xl p-3 shadow-2xl border-2 border-gray-200/60 dark:border-gray-700/60 group-hover:border-transparent transition-all duration-300 backdrop-blur-lg`}
                    whileHover={{ scale: 1.2, zIndex: 100 }}
                    animate={{
                      boxShadow: [
                        '0 8px 20px rgba(0,0,0,0.08)',
                        '0 12px 30px rgba(0,0,0,0.12)',
                        '0 8px 20px rgba(0,0,0,0.08)'
                      ]
                    }}
                    transition={{
                      boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {/* Top accent line */}
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                      animate={{
                        width: ['66%', '80%', '66%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Icon Container with Better Styling */}
                    <motion.div
                      className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg relative mb-2 group-hover:shadow-2xl transition-shadow`}
                      whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        scale: 1.1
                      }}
                      animate={{
                        boxShadow: [
                          '0 8px 16px rgba(0,0,0,0.15)',
                          '0 12px 24px rgba(0,0,0,0.20)',
                          '0 8px 16px rgba(0,0,0,0.15)'
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 0.5 },
                        scale: { duration: 0.3 }
                      }}
                    >
                      {/* Icon glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} blur-md opacity-60`} />
                      <IconComponent className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>

                    {/* Category Name */}
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white text-center leading-tight">
                      {category.name}
                    </h3>
                  </motion.div>

                  {/* Tooltip Card - Appears on Hover */}
                  <div
                    className={`absolute ${tooltipPosition === 'top' ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200`}
                    style={{ zIndex: 9999 }}
                  >
                    {/* Arrow pointing to node */}
                    <div
                      className={`absolute ${tooltipPosition === 'top' ? '-bottom-2' : '-top-2'} left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-950 border-2 ${tooltipPosition === 'top' ? 'border-t-gray-200 dark:border-t-gray-800 border-l-gray-200 dark:border-l-gray-800 border-b-transparent border-r-transparent' : 'border-b-gray-200 dark:border-b-gray-800 border-r-gray-200 dark:border-r-gray-800 border-t-transparent border-l-transparent'} rotate-45`}
                    />

                    {/* Tooltip Card */}
                    <div className={`relative bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-2xl border-2 border-gray-200 dark:border-gray-800 w-64 backdrop-blur-lg`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-5`} />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="relative z-10">
                        {/* Title */}
                        <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white text-center">
                          {category.name}
                        </h4>

                        {/* Divider */}
                        <div className={`w-16 h-0.5 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-4`} />

                        {/* Technologies */}
                        <div className="space-y-2.5">
                          {category.technologies.map((tech, i) => (
                            <div
                              key={i}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2"
                            >
                              <motion.div
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`}
                              />
                              <span className="font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="md:hidden space-y-6 px-2">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                className="relative group"
              >
                {/* Animated Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} blur-xl opacity-20 group-active:opacity-40`}
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                {/* Card */}
                <motion.div
                  className={`relative bg-white dark:bg-gray-950 rounded-2xl p-5 md:p-6 shadow-xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden`}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-5`} />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-4 md:gap-5">
                    {/* Icon with Pulse Animation */}
                    <motion.div
                      className={`flex-shrink-0 inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                      animate={{
                        boxShadow: [
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                          '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white"
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
