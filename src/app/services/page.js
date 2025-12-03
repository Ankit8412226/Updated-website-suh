import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";

export const metadata = {
  title: "IT Services - Web Development & DevOps Solutions | SUH Tech",
  description:
    "Comprehensive IT services by SUH Tech Private Limited: Web application development, DevOps automation, cloud infrastructure, CI/CD pipelines, mobile app development, and enterprise solutions. Expert team delivering scalable technology solutions.",
  keywords: [
    "web development services",
    "devops services",
    "cloud infrastructure",
    "CI/CD automation",
    "mobile app development",
    "enterprise solutions",
    "it consulting services",
    "software development services",
    // Long-tail keywords for Delhi NCR
    "web development services in delhi ncr",
    "devops automation services noida",
    "cloud infrastructure setup delhi",
    "ci/cd pipeline services gurgaon",
    "mobile app development company delhi ncr",
    "enterprise web solutions delhi",
    "it consulting services in noida",
    "custom software development delhi",
  ],
  openGraph: {
    title: "IT Services - Web Development & DevOps | SUH Tech Private Limited",
    description:
      "Comprehensive IT services: Web app development, DevOps automation, cloud infrastructure, and enterprise solutions.",
    url: "https://www.suhtech.top/services",
  },
  alternates: {
    canonical: "https://www.suhtech.top/services",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    summary:
      "High-performing websites, portals, and commerce experiences with React, Next.js, and headless CMS.",
  },
  {
    title: "Mobile Apps",
    slug: "mobile-apps",
    summary:
      "Native and cross-platform applications with offline-first UX, analytics, and CI/CD automation.",
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-and-devops",
    summary:
      "Cloud landing zones, infrastructure as code, Kubernetes, observability, and release governance.",
  },
  {
    title: "AI & Automation",
    slug: "ai-and-automation",
    summary:
      "LLM copilots, data engineering, intelligent process automation, and decision support systems.",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    summary:
      "Security assessments, zero-trust architecture, DevSecOps tooling, and compliance automation.",
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    summary:
      "Architecture reviews, transformation roadmaps, fractional CTO advisory, and PMO modernization.",
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    summary:
      "Multi-tenant SaaS platforms with billing, provisioning, analytics, and customer success tooling.",
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-and-support",
    summary:
      "24/7 monitoring, performance tuning, feature upgrades, and experience optimization.",
  },
  {
    title: "Startup Solutions",
    slug: "startup-solutions",
    summary:
      "We help startups transform ideas into scalable digital products. From MVP development and frontend integration to performance-optimized web solutions, we support startups with fast, reliable, and growth-oriented technology.",
  },

];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <section className="pt-24 pb-12 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build, launch, and scale with one partner
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Choose a single capability or assemble a cross-functional pod. Every
            engagement includes product leadership, program management, and
            enterprise-grade delivery standards.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                {/* <ArrowUpRight className="text-blue-500" size={20} /> */}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {service.summary}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-blue-600 underline underline-offset-4"
              >
                Explore service
              </Link>
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

