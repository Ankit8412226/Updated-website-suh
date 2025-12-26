import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar";
import FooterSection from "../../components/FooterSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import { Check } from "lucide-react";

/* ===============================
   SERVICE DATA (UNCHANGED)
================================ */
const serviceCatalog = {
  "web-development": {
    title: "Web Development",
    subtitle: "Composable, SEO-friendly platforms built for conversion.",
    overview:
      "We design and build modular web applications with React, Next.js, and headless CMS ecosystems. Every engagement includes CRO heuristics, accessibility reviews, and Core Web Vitals monitoring.",
    outcomes: [
      "Reusable component libraries and design systems",
      "Page speed scores above 90 on mobile",
      "Content workflows wired into your marketing stack",
    ],
    process: [
      "Audience research, UX flows, and information architecture",
      "Design system + content modeling",
      "Next.js/Node implementation with hydration strategy",
      "Observability, accessibility, and launch readiness",
    ],
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "GraphQL",
      "Contentful",
      "Sanity",
      "Cloudflare",
    ],
    pricing: [
      "Sprint pod (Design + Eng + QA)",
      "Marketing website revamp",
      "Design system setup",
    ],
    faqs: [
      {
        q: "Do you migrate existing CMS content?",
        a: "Yes. We map legacy schemas, automate migration scripts, and provide editorial training.",
      },
      {
        q: "Can you integrate analytics?",
        a: "Yes, GA4, Segment, Amplitude and consent management.",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    subtitle: "High-performance iOS & Android applications.",
         heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",


    overview:
      "We build scalable mobile apps using Flutter, React Native, and native technologies.",

    outcomes: [
      "Cross-platform mobile apps",
      "Offline-first architecture",
      "App Store & Play Store deployment",
    ],

    pricing: [
      "MVP mobile app",
      "Enterprise mobile solution",
      "App optimization & upgrades",
    ],

    faqs: [
      {
        q: "Do you publish apps to stores?",
        a: "Yes, we handle App Store and Play Store submissions.",
      },
    ],
  },

  "cloud-and-devops": {
    title: "Cloud & DevOps",
    subtitle: "Secure, scalable, cloud-native infrastructure.",
     heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We design cloud architectures on AWS, Azure, and GCP with DevOps automation.",

    outcomes: [
      "CI/CD pipelines",
      "99.99% uptime",
      "Infrastructure as Code",
    ],

    pricing: [
      "Cloud migration",
      "DevOps automation",
      "Monitoring & optimization",
    ],

    faqs: [
      {
        q: "Which cloud platforms do you support?",
        a: "AWS, Azure, and Google Cloud.",
      },
    ],
  },

  "ai-and-automation": {
    title: "AI & Automation",
    subtitle: "Intelligent systems powered by data.",
     heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We build AI models, chatbots, and automation workflows to boost efficiency.",

    outcomes: [
      "AI chatbots",
      "Process automation",
      "Predictive analytics",
    ],

    pricing: [
      "AI proof of concept",
      "Production ML pipelines",
      "Automation workflows",
    ],

    faqs: [
      {
        q: "Do you use OpenAI models?",
        a: "Yes, OpenAI, Gemini, and custom ML models.",
      },
    ],
  },

  "cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Protecting your digital assets.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We provide security audits, penetration testing, and compliance solutions.",

    outcomes: [
      "Security audits",
      "Threat monitoring",
      "Compliance readiness",
    ],

    pricing: [
      "Security audit",
      "Penetration testing",
      "Ongoing monitoring",
    ],

    faqs: [
      {
        q: "Do you provide compliance help?",
        a: "Yes, ISO, SOC2, and GDPR compliance.",
      },
    ],
  },

  "it-consulting": {
    title: "IT Consulting",
    subtitle: "Strategic technology guidance.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We help organizations align technology with business goals.",

    outcomes: [
      "IT roadmaps",
      "Cost optimization",
      "Technology strategy",
    ],

    pricing: [
      "IT assessment",
      "Architecture planning",
      "Digital transformation",
    ],

    faqs: [
      {
        q: "Do you work with startups?",
        a: "Yes, startups to enterprises.",
      },
    ],
  },

  "saas-development": {
    title: "SaaS Development",
    subtitle: "Build scalable SaaS platforms.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",
    overview:
      "We design and develop multi-tenant SaaS products.",

    outcomes: [
      "Subscription billing",
      "Role-based access",
      "Scalable backend",
    ],

    pricing: [
      "SaaS MVP",
      "Feature expansion",
      "Scaling & optimization",
    ],

    faqs: [
      {
        q: "Do you handle SaaS scaling?",
        a: "Yes, from MVP to enterprise scale.",
      },
    ],
  },

  "maintenance-and-support": {
    title: "Maintenance & Support",
    subtitle: "Reliable ongoing support.",
   heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We provide long-term maintenance and technical support.",

    outcomes: [
      "24/7 monitoring",
      "Bug fixes",
      "Performance optimization",
    ],

    pricing: [
      "Monthly support",
      "Dedicated support team",
      "On-demand fixes",
    ],

    faqs: [
      {
        q: "Do you offer 24/7 support?",
        a: "Yes, with SLA-based plans.",
      },
    ],
  },

  "startup-solutions": {
    title: "Startup Solutions",
    subtitle: "From idea to launch.",
    heroImage: "/images/Rectangle_Web_Development.svg",
    featureImage: "/images/Rectangle_Growth.svg",

    overview:
      "We help startups build MVPs, scale products, and raise funding.",

    outcomes: [
      "MVP development",
      "Tech mentoring",
      "Scalable architecture",
    ],

    pricing: [
      "Startup MVP",
      "Product scaling",
      "CTO-as-a-Service",
    ],

    faqs: [
      {
        q: "Do you help with MVPs?",
        a: "Yes, end-to-end MVP development.",
      },
    ],
  },
};

/* ===============================
   PAGE
================================ */
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const data = serviceCatalog[slug];

  if (!data) notFound();

  return (
    <main className="bg-white text-gray-900">
      <NavBar />

      {/* ================= HERO WRAPPER ================= */}
<section className="relative overflow-hidden">

  {/* Background Glow */}
  <img
    src="/images/Ellipse 604 (1).svg"
    alt="bg-glow"
    className="absolute bottom-[-480px] right-[-120px]
               w-[550px] md:w-[750px]
               opacity-90 pointer-events-none z-0"
  />

  {/* ================= HERO ================= */}
  <div className="relative pt-32 pb-20 text-center z-10">
    <h1 className="text-5xl font-bold">{data.title}</h1>

    <p className="mt-4 text-lg text-gray-600">
      {data.subtitle}
    </p>

    <p className="mt-4 max-w-3xl mx-auto text-gray-500">
      {data.overview}
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <Link
        href="/#contact"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-semibold"
      >
        Book A Workshop
      </Link>

      <Link
        href="/#pricing"
        className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-semibold"
      >
        View pricing options
      </Link>
    </div>

    {/* Hero Image */}
    <div className="relative mt-12 max-w-5xl mx-auto z-20">
      <img
        src="/images/Rectangle_Web_Development.svg"
        alt="Web Development"
        className="rounded-2xl shadow-xl"
      />
    </div>
  </div>
</section>


      {/* ================= LOGOS ================= */}
      <section className="py-8 text-center text-sm text-gray-500">
        Trusted By 100+ Famous Companies
        <div className="mt-4 flex justify-center gap-8 opacity-70">
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <Stat value="500K+" label="Total Active Users" />
          <Stat value="2PB" label="Data Saved" />
          <Stat value="50+" label="Global Data Centers" />
          <Stat value="99.9%" label="Uptime Guarantee" />
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUsSection />

      {/* ================= FEATURE ================= */}

      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start px-6">

        <div>
          <img
            src="/images/Rectangle_Growth.svg"
            alt="Growth analytics"
            className="rounded-3xl  w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enhance Your Capabilities With Our New Feature
          </h2>

          <p className="text-gray-600 mb-8">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And
            Typesetting Industry.
          </p>

          <ul className="space-y-5">
            {data.outcomes.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>




      {/* ================= PRICING ================= */}
      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-24 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-14 px-6">
          <h2 className="text-4xl font-bold mb-4">
            Transparent Pricing <br /> For Your Cloud Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover Cost-Effective Cloud Solutions With Pricing That Suitable For You
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {data.pricing.map((p, i) => {
            const isFeatured = i === 1;

            return (
              <div
                key={p}
                className={`rounded-3xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300
            ${isFeatured
                    ? "bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white scale-105"
                    : "bg-white/30"
                  }`}
              >
                {/* Top */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Basic Plan</h3>
                  <p className={`${isFeatured ? "text-purple-100" : "text-gray-500"} mb-6`}>
                    Individual Or Small Teams
                  </p>

                  <p className="text-3xl font-bold mb-6">
                    ₹50000 <span className="text-base font-medium">/ Month</span>
                  </p>

                  <button
                    className={`w-full py-3 rounded-full font-semibold mb-8
                ${isFeatured
                        ? "bg-white text-purple-600"
                        : "bg-purple-600 text-white"
                      }`}
                  >
                    Choose The Plan
                  </button>
                </div>

                {/* Features */}
                <div>
                  <p className="font-semibold mb-4">Features Include:</p>
                  <ul className="space-y-3 text-sm">
                    {Array(7)
                      .fill("Basic Cloud Storage")
                      .map((feature, idx) => (
                        <li
                          key={idx}
                          className={`flex items-center gap-3 ${isFeatured ? "text-purple-100" : "text-gray-600"
                            }`}
                        >
                          <span className="text-lg leading-none">•</span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-start">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Frequently <br /> Asked Questions
            </h2>
            <p className="text-gray-500 max-w-sm">
              Have Another Question? Please Contact Us Via Email Down Below
            </p>
          </div>

          {/* Right Accordion */}
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details
                key={faq.q}
                open={i === 0}
                className={`group rounded-2xl border transition-all
            ${i === 0
                    ? "bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white"
                    : "bg-white"
                  }`}
              >
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold list-none">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">
                    ⌃
                  </span>
                </summary>

                <div className={`px-6 pb-4 text-sm leading-relaxed
            ${i === 0 ? "text-purple-100" : "text-gray-600"}
          `}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#9616FB] to-[#3459FB] rounded-3xl text-white text-center py-16 px-8 shadow-xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try Risk Free With 30-Day <br /> Money - Back Guarantee!
            </h2>

            <p className="text-purple-100 mb-8">
              If You Are Not Satisfied, We Will Refund Your Payment – No Questions Asked
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-3 rounded-full
                   bg-white/30 backdrop-blur text-white font-semibold
                   hover:bg-white/40 transition"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

      /* ===============================
         HELPERS
      ================================ */
      function Stat({value, label}) {
  return (
      <div>
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-sm opacity-90">{label}</div>
      </div>
      );
}



      /* ===============================
         STATIC + SEO
      ================================ */
      export function generateStaticParams() {
  return [{slug: "serviceCatalog" }];
}

      export async function generateMetadata({params}) {
      const {slug} = await params;
      const data = serviceCatalog[slug];
      return {
        title: `${data.title} Services | SUH Tech`,
      description: data.subtitle,
  };
}
