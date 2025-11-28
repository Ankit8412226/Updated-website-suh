// src/app/portfolio/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar";
import FooterSection from "../../components/FooterSection";

const projectCatalog = {
  // 🔵 ORGA
  "orga-employee-management": {
    title: "Orga – Employee & Operations Management System",
    subtitle: "Smart HR, Projects, Support & Finance — All in One Unified Platform",
    primaryCta: "View Live Demo",
    primaryLink: "/coming-soon",
    secondaryCta: "Get Started",
    secondaryLink: "/contact",

    overviewBody:
      "Orga is a comprehensive employee and operations management system designed to streamline HR processes, project management, customer support, and financial operations. Built to handle complex organizational workflows, Orga provides a unified platform that eliminates the need for multiple disconnected tools.",
    overviewGoals: [
      "Centralize HR, projects, support, and finance in one platform",
      "Automate employee management and attendance tracking",
      "Streamline project workflows with intuitive dashboards",
      "Improve support ticket resolution times",
      "Enable real-time financial tracking and reporting",
      "Provide role-based access control for security",
    ],
    overviewImage: "/images/Orga.png",

    problemIntro: "Organizations faced fragmentation and inefficiency across operations:",
    problems: [
      "Multiple disconnected tools for HR, projects, and finance.",
      "Manual processes for leave management and attendance.",
      "Lack of real-time visibility into employee performance.",
      "Inefficient support ticket management across departments.",
      "No centralized system for financial tracking and reporting.",
    ],

    solutionIntro: "We built a complete enterprise management platform with integrated modules:",
    solutions: [
      "Employee management with role-based access control.",
      "Project management module with Kanban boards and time tracking.",
      "Automated leave management and attendance system.",
      "Integrated support ticketing with SLA tracking.",
      "Financial management with invoicing and expense tracking.",
      "Real-time analytics dashboards for all modules.",
    ],

    technologiesIntro: "Built with modern enterprise-grade technologies:",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "TypeScript", "Tailwind CSS"],

    impactIntro: "Organizations using Orga experienced significant operational improvements:",
    impact: [
      "85% reduction in administrative overhead.",
      "50% faster project delivery with improved workflows.",
      "100+ enterprise organizations using the platform.",
      "4.8/5 average user satisfaction rating.",
    ],
  },

  // 🟡 VIRAJ
  "viraj-jewellers-website": {
    title: "Viraj Jewellers – Website Development",
    subtitle:
      "A premium and trustworthy digital experience built for a leading jewellery and Cash-for-Gold brand.",
    primaryCta: "View Live Website",
    primaryLink: "https://www.virajjeweller.com/",
    secondaryCta: "Get a Similar Website",
    secondaryLink: "/contact",

    overviewBody:
      "Viraj Jewellers approached us to revamp their digital presence with a modern, elegant, and trust-building website that highlights their Cash for Gold service while also showcasing their jewellery collections. The goal was to create a platform that communicates credibility, transparency, and ease of service—three essentials for customers dealing with gold exchange.",
    overviewGoals: [
      "Build trust in the Cash-for-Gold service",
      "Communicate the process clearly & transparently",
      "Establish the brand as premium & reliable",
      "Drive walk-ins and online inquiries",
      "Showcase jewellery offerings with a modern UI",
      "Provide a seamless, mobile-first experience",
    ],
    overviewImage: "/images/Viraj.png",

    problemIntro:
      "Customers who want to sell gold often face uncertainty and low trust online:",
    problems: [
      "Fear of fraud or undervaluation.",
      "Lack of clarity in the gold exchange process.",
      "Poorly designed websites lacking credibility.",
      "Outdated branding that fails to build trust.",
      "Inefficient inquiry and booking systems.",
    ],

    solutionIntro:
      "We designed a clean, elegant, and trust-boosting website with:",
    solutions: [
      "Premium UI inspired by luxury jewellery brands.",
      "Clear process explanation for Cash-for-Gold.",
      "Trust badges, certifications, and testimonials.",
      "Gold rate checker integration (optional / planned).",
      "WhatsApp & call-to-action triggers for instant leads.",
      "Modern product pages for jewellery categories.",
      "High-end visuals and brand-focused colors.",
      "Fast-loading, mobile-optimized pages.",
    ],

    technologiesIntro:
      "The site is built with a flexible stack that can adapt to the client’s backend preferences.",
    technologies: [
      "React / HTML / Tailwind",
      "Node.js / PHP",
      "Figma (UI/UX design)",
    ],

    impactIntro:
      "After launch, Viraj Jewellers saw clear improvements in brand perception and lead generation.",
    impact: [
      "Higher online inquiries for Cash-for-Gold.",
      "Improved trust & credibility online.",
      "Better customer walk-ins from digital channels.",
      "Stronger brand identity.",
      "A modern presence that matches their physical store quality.",
    ],
  },

  // 🟣 BOTBRIDGE
  "botbridge-support-automation": {
    title: "BotBridge – Support Automation Platform",
    subtitle: "Transforming Support Into a Growth Engine.",
    primaryCta: "See It in Action",
    primaryLink: "https://www.suhtech.shop/",

    overviewBody:
      "BotBridge is an AI-driven support automation platform designed to streamline customer service operations and reduce manual support workload. It intelligently handles customer queries through smart workflows, automated responses, and context-aware routing, enabling faster issue resolution and improved consistency across support channels.By reducing response times and minimizing repetitive tasks, BotBridge enhances agent productivity and delivers a more efficient, customer-centric support experience. ",
    overviewGoals: [], // optional
    overviewImage: "/images/Botbridge.png",

    problemIntro: "Support teams were under pressure with high volume and delays:",
    problems: [
      "High support volume.",
      "Slow responses.",
      "Repetitive queries.",
      "Lack of helpdesk automation.",
      "Inefficient ticket assignment.",
    ],

    solutionIntro: "BotBridge uses AI + intuitive UX to deliver:",
    solutions: [
      "AI chatbots – auto-responses for recurring queries.",
      "Ticketing system – smart assignment & prioritization.",
      "Knowledge base integration – faster issue resolution.",
      "Analytics dashboard – ticket trends and agent performance.",
      "Live chat – smooth human handover when needed.",
    ],

    technologiesIntro:
      "We combined robust backend engineering with modern AI tooling.",
    technologies: ["React", "Node.js", "TensorFlow / AI APIs", "SQL", "Figma"],

    impactIntro:
      "BotBridge helped support leaders modernize operations and customer experience.",
    impact: [
      "70% reduction in manual support for repetitive queries.",
      "Better customer satisfaction through faster responses.",
      "Shorter resolution time and predictable support workflows.",
    ],
  },

  // 🟢 SKILLGURU
  "skillguru-lms-platform": {
    title: "SkillGuru – LMS Platform",
    subtitle: "Empowering Continuous Learning & Skill Development.",
    primaryCta: "View Live Demo",
    primaryLink: "https://www.suhtech.in/",

    overviewBody:
      "SkillGuru is a comprehensive and scalable Learning Management System (LMS) designed for ed-tech platforms, training institutes, and organizations aiming to deliver high-quality digital learning experiences. It enables the creation and management of structured courses, certifications, and assessments while providing real-time student progress tracking and performance analytics.The platform supports role-based access for administrators, instructors, and learners, ensuring smooth course management and secure data handling.",
    overviewGoals: [],
    overviewImage: "/images/Skillguru.png",

    problemIntro: "SkillGuru addresses key challenges in traditional learning setups:",
    problems: [
      "Institutes lacked a centralized learning platform.",
      "Students struggled with inconsistent learning material.",
      "No real-time progress tracking.",
      "Educators needed better course organization tools.",
    ],

    solutionIntro:
      "SkillGuru delivers a seamless end-to-end learning experience with:",
    solutions: [
      "Course management – create and manage video, text & quiz content.",
      "Student dashboard – personalized learning experience.",
      "Assessments & quizzes – auto-evaluated tests.",
      "Progress tracking – analytics for learners and instructors.",
      "Placement support – career guidance & job preparation.",
    ],

    technologiesIntro:
      "The platform is built to work across institutes and enterprises.",
    technologies: ["React", "Firebase / MySQL", "Node.js", "Figma"],

    impactIntro:
      "Training teams used SkillGuru to modernize how they deliver learning.",
    impact: [
      "Improved learning outcomes with structured content.",
      "Automated tracking and reporting for educators.",
      "Better engagement & retention from learners.",
    ],
  },
};

// helper: simple card grid (Problem / Solution / Impact)
const textCardGrid = (items, title, intro) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      {intro && (
        <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl">
          {intro}
        </p>
      )}
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-[#e3e5f0] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
        >
          <p className="text-sm text-gray-700 dark:text-gray-200">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const data = projectCatalog[slug];

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-slate-50">
      <NavBar />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative pt-24 pb-20 mt-16 md:mt-20 lg:mt-24 overflow-hidden">
        {/* Background Image with Overlay */}
        {/* Light-mode background (visible when not .dark) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed block dark:hidden"
          style={{
            backgroundImage: "url('/images/Founder%27s%20vision%20bg-light%20theme.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark-mode background (visible when .dark is present on root) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed hidden dark:block"
          style={{
            backgroundImage: "url('/images/Founder%27s%20vision%20bg-dark%20theme.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-slate-900/70" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
          {/* <Link
            href="/portfolio"
            className="inline-block mb-6 text-xs uppercase tracking-[0.35em] text-blue-300 hover:text-blue-200 transition-colors"
          >
            ← Portfolio
          </Link> */}

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {data.primaryCta && (
                <Link
                  href={data.primaryLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative">{data.primaryCta}</span>
                </Link>
              )}
              {data.secondaryCta && (
                (() => {
                  const link = data.secondaryLink || "#";
                  const isExternal = /^https?:\/\//i.test(link) || /^\/\//.test(link) ? true : false;
                  return (
                    <Link
                      href={link}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      {data.secondaryCta}
                    </Link>
                  );
                })()
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
          
          {/* PROJECT OVERVIEW */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight">
                Project Overview
              </h2>
            </div>
            
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                  {data.overviewBody}
                </p>

                {data.overviewGoals && data.overviewGoals.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      Project Goals
                    </h3>
                    <ul className="space-y-3">
                      {data.overviewGoals.map((goal) => (
                        <li key={goal} className="flex gap-3 text-gray-700 dark:text-gray-200">
                          <span className="text-blue-500 font-bold mt-1">✓</span>
                          <span className="text-sm md:text-base">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {data.overviewImage && (
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200/70 dark:border-gray-700">
                  <img
                    src={data.overviewImage}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {/* PROBLEM WE SOLVED */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
                Problem We Solved
              </h2>
              {data.problemIntro && (
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {data.problemIntro}
                </p>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.problems.map((item, index) => (
                <div
                  key={item}
                  className="group relative rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-800/50 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-3">
                    <span className="text-red-500 dark:text-red-400 font-bold text-lg flex-shrink-0">×</span>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* OUR SOLUTION */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
                Our Solution
              </h2>
              {data.solutionIntro && (
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {data.solutionIntro}
                </p>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.solutions.map((item, index) => (
                <div
                  key={item}
                  className="group relative rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800/50 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">✓</span>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNOLOGY USED */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight">
                Technology Used
              </h2>
              {data.technologiesIntro && (
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {data.technologiesIntro}
                </p>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {data.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700 text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* IMPACT */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
                Impact
              </h2>
              {data.impactIntro && (
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {data.impactIntro}
                </p>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.impact.map((line, index) => (
                <div
                  key={line}
                  className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/50 px-6 py-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* BACK LINK */}
          <div className="text-center pt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>←</span>
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(projectCatalog).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = projectCatalog[slug];

  if (!data) {
    return {
      title: "Portfolio | ArtofQR",
      icons: { icon: "/icons/SUHTechLogo (1).svg" },
    };
  }

  return {
    title: `${data.title} | ArtofQR Portfolio`,
    description: data.subtitle,
    icons: { icon: "/icons/SUHTechLogo (1).svg" },
  };
}

export default PortfolioDetailPage;
