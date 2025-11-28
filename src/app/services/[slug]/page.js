import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar";
import FooterSection from "../../components/FooterSection";

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
      "Sprint pod (Design + Eng + QA) from $12k/mo",
      "Fixed-scope marketing site revamps from $25k",
      "Design system setup from $8k",
    ],
    faqs: [
      {
        q: "Do you migrate existing CMS content?",
        a: "Yes. We map legacy schemas, automate migration scripts, and provide editorial training.",
      },
      {
        q: "Can you integrate with our analytics stack?",
        a: "We wire in Segment, GA4, Amplitude, and first-party data layers with consent management.",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile Apps",
    subtitle: "Native and cross-platform experiences shipped with CI/CD rigor.",
    overview:
      "We deliver iOS, Android, and cross-platform apps using React Native, Swift, and Kotlin. Release trains include automated testing, app store compliance, and feature flag strategies.",
    outcomes: [
      "Offline-first UX with secure data sync",
      "Performance budgets enforced via CI",
      "Analytics and experimentation baked in",
    ],
    process: [
      "Product discovery and backlog creation",
      "Design system parity across web + mobile",
      "Native module development + QA automation",
      "App store submission, release orchestration, and hypercare",
    ],
    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Expo",
      "Firebase",
      "AppCenter",
    ],
    pricing: [
      "Cross-platform pod from $14k/mo",
      "Native feature squads from $18k/mo",
      "App audits and performance tuning from $6k",
    ],
    faqs: [
      {
        q: "Do you support existing codebases?",
        a: "Yes. We start with a stability audit, set up observability, and then assume the release cadence.",
      },
      {
        q: "Can you integrate with backend teams?",
        a: "We collaborate via shared API contracts, Pact testing, and dedicated Slack channels.",
      },
    ],
  },
  "cloud-and-devops": {
    title: "Cloud & DevOps",
    subtitle: "Modern infrastructure with automated releases and compliance.",
    overview:
      "Our DevOps engineers design landing zones, IaC modules, and CI/CD workflows across AWS, Azure, and GCP. We embed SRE practices, automated guardrails, and 24/7 monitoring.",
    outcomes: [
      "GitOps pipelines with rollback automation",
      "Policy-as-code for security and compliance",
      "Observability dashboards for leadership and on-call",
    ],
    process: [
      "Current-state assessment & reliability scorecard",
      "Reference architecture + IaC modules",
      "Pipeline automation (GitHub Actions, ArgoCD, Atlantis)",
      "Handover with runbooks and training",
    ],
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Terraform",
      "Pulumi",
      "GitHub Actions",
      "ArgoCD",
    ],
    pricing: [
      "Dedicated DevOps pod from $8k/mo",
      "Landing zone setup from $15k",
      "SRE on-call retainers from $5k/mo",
    ],
    faqs: [
      {
        q: "Do you handle SOC2 / ISO artifacts?",
        a: "Yes, we generate architecture diagrams, access reviews, and deployment evidence for auditors.",
      },
      {
        q: "Can you work with our security team?",
        a: "We align on shared guardrails, secrets management, and change approval workflows.",
      },
    ],
  },
  "ai-and-automation": {
    title: "AI & Automation",
    subtitle: "LLM copilots, intelligent workflows, and analytics copilots.",
    overview:
      "We identify high-leverage automation opportunities, design ethical guardrails, and ship AI-powered tools with measurable ROI.",
    outcomes: [
      "LLM-driven copilots embedded in existing tools",
      "Automated decision assistance with human oversight",
      "Dashboards that surface impact and adoption",
    ],
    process: [
      "Use-case ideation + data readiness audit",
      "Prompt architecture, retrieval strategies, evaluation plans",
      "Build, test, and deploy AI workflows",
      "Enablement sessions + continuous improvement loops",
    ],
    technologies: [
      "Python",
      "LangChain",
      "OpenAI",
      "Azure OpenAI",
      "Vertex AI",
      "Airflow",
    ],
    pricing: [
      "Discovery + proof of concept from $10k",
      "Production-grade copilots from $25k",
      "Automation retainers from $9k/mo",
    ],
    faqs: [
      {
        q: "How do you handle data privacy?",
        a: "We implement encryption, masking, and private model hosting when required.",
      },
      {
        q: "Do you measure model drift?",
        a: "Yes, evaluation suites run continuously with alerts on accuracy, latency, and cost.",
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    subtitle: "Zero-trust architecture, DevSecOps, and continuous compliance.",
    overview:
      "Security architects evaluate your stack, patch vulnerabilities, and automate compliance with developer-friendly workflows.",
    outcomes: [
      "Threat modeling and hardened environments",
      "Shift-left security integrated with CI/CD",
      "Continuous evidence collection for audits",
    ],
    process: [
      "Security posture review and prioritization",
      "Guardrail implementation (SSO, secrets, IaC policy)",
      "DevSecOps automation + monitoring",
      "Tabletop exercises and training",
    ],
    technologies: [
      "Vault",
      "Prisma Cloud",
      "Snyk",
      "Wiz",
      "AWS Security Hub",
      "Open Policy Agent",
    ],
    pricing: [
      "Security assessment from $12k",
      "DevSecOps integration from $18k",
      "Managed compliance support from $6k/mo",
    ],
    faqs: [
      {
        q: "Can you help with SOC2 readiness?",
        a: "We implement controls, document evidence, and coordinate with auditors.",
      },
      {
        q: "Do you offer penetration testing?",
        a: "We collaborate with accredited partners and integrate remediation plans into your backlog.",
      },
    ],
  },
  "it-consulting": {
    title: "IT Consulting",
    subtitle: "Fractional CTO, architecture advisory, and modernization roadmaps.",
    overview:
      "We act as a strategic partner for boards, CTOs, and CMOs—aligning technology choices with business goals.",
    outcomes: [
      "Clear roadmap with investments, timelines, and dependencies",
      "Org design recommendations and hiring plans",
      "Vendor assessments and KPI frameworks",
    ],
    process: [
      "Stakeholder interviews and system audits",
      "Capability maturity scoring",
      "Roadmap + business case creation",
      "Ongoing advisory and governance",
    ],
    technologies: ["Miro", "Lucid", "Jira", "Confluence", "Notion"],
    pricing: [
      "Advisory blocks from $5k",
      "Fractional CTO engagement from $12k/mo",
      "Architecture review + playbook from $9k",
    ],
    faqs: [
      {
        q: "Do you work with in-house leadership?",
        a: "Yes, we co-create roadmaps and support change management alongside your exec team.",
      },
      {
        q: "Can you help evaluate vendors?",
        a: "We build scorecards, run bake-offs, and negotiate SLAs on your behalf.",
      },
    ],
  },
  "saas-development": {
    title: "SaaS Development",
    subtitle: "Multi-tenant platforms with billing, provisioning, and analytics.",
    overview:
      "We build SaaS products end-to-end—covering user onboarding, entitlements, metering, and customer success dashboards.",
    outcomes: [
      "Tenant-aware architecture with role-based access",
      "Usage analytics and billing automation",
      "Launch playbook with GTM instrumentation",
    ],
    process: [
      "Product strategy + pricing mechanics",
      "Domain modeling, data design, and API contracts",
      "Implementation with automated QA",
      "Launch readiness + customer enablement",
    ],
    technologies: [
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Chargebee",
      "Segment",
    ],
    pricing: [
      "MVP build from $45k",
      "Feature pods from $15k/mo",
      "SaaS ops + support from $7k/mo",
    ],
    faqs: [
      {
        q: "Do you handle multi-region deployments?",
        a: "Yes, we architect for data residency, failover, and latency budgets.",
      },
      {
        q: "Can you integrate CRM and billing?",
        a: "We connect Salesforce/HubSpot with Stripe/Chargebee, keeping ARR data consistent.",
      },
    ],
  },
  "maintenance-and-support": {
    title: "Maintenance & Support",
    subtitle: "On-call squads for enhancements, support, and scale.",
    overview:
      "Keep your product healthy with L2/L3 engineers, QA, and DevOps technicians who monitor, fix, and optimize in the background.",
    outcomes: [
      "Defined SLAs and escalation paths",
      "Regular performance and security reviews",
      "Roadmap suggestions backed by analytics",
    ],
    process: [
      "Knowledge transfer and playbook creation",
      "Monitoring + alerting setup",
      "Weekly ops reviews and monthly reporting",
      "Backlog grooming and optimization sprints",
    ],
    technologies: [
      "Datadog",
      "New Relic",
      "PagerDuty",
      "Sentry",
      "Statuspage",
      "Looker",
    ],
    pricing: [
      "24/7 monitoring from $6k/mo",
      "Enhancement retainer pods from $10k/mo",
      "One-off stabilization projects from $8k",
    ],
    faqs: [
      {
        q: "Do you offer on-call coverage?",
        a: "Yes, we provide follow-the-sun support with documented runbooks.",
      },
      {
        q: "Can you work alongside our helpdesk?",
        a: "We integrate with Zendesk, Jira Service Management, or Intercom for seamless escalations.",
      },
    ],
  },
  "startup-solutions": {
    title: "Startup Solutions",
    subtitle: "Transform ideas into scalable digital products with growth-focused technology.",
    overview:
      "We help startups transform ideas into scalable digital products. From MVP development and frontend integration to performance-optimized web solutions, we support startups with fast, reliable, and growth-oriented technology.",
    outcomes: [
      "Rapid MVP development with market validation features",
      "Scalable architecture that grows with your user base",
      "Cost-effective solutions optimized for startup budgets",
    ],
    process: [
      "Idea validation and market research analysis",
      "MVP scoping and technical architecture design",
      "Agile development with weekly iterations",
      "Launch preparation and go-to-market support",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Stripe",
    ],
    pricing: [
      "MVP development from $25k",
      "Startup development pod from $8k/mo",
      "Technical advisory from $3k/mo",
    ],
    faqs: [
      {
        q: "Do you work with early-stage startups?",
        a: "Yes, we specialize in helping startups from idea to market, with flexible engagement models.",
      },
      {
        q: "Can you help with funding pitch preparation?",
        a: "We provide technical documentation, architecture diagrams, and demo preparation for investor meetings.",
      },
    ],
  },
};

const infoBlocks = (items, title) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const data = serviceCatalog[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <section className="pt-24 pb-12 border-b border-gray-100 dark:border-gray-800 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <Link
            href="/services"
            className="text-sm uppercase tracking-[0.4em] text-blue-500"
          >
            Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            {data.subtitle}
          </p>
          <p className="text-base text-gray-700 dark:text-gray-200 max-w-4xl">
            {data.overview}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
            >
              Book a workshop
            </Link>
            <Link
              href="/#pricing"
              className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold"
            >
              View pricing options
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {infoBlocks(data.outcomes, "Business outcomes")}
            {infoBlocks(data.process, "Process playbook")}
            {infoBlocks(data.technologies, "Tech we rely on")}
          </div>
          {/* <div className="space-y-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-6">
            <h3 className="text-lg font-semibold">Pricing snapshots</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {data.pricing.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </section>

      <section className="py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            FAQ
          </h3>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.q}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(serviceCatalog).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = serviceCatalog[slug];
  if (!data) {
    return {
      title: "ArtofQR Services",
      
    };
  }
  return {
    title: `${data.title} | ArtofQR`,
    description: data.subtitle,
  };
}

export default ServiceDetailPage;

