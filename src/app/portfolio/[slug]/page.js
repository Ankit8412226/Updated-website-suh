import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import FooterSection from "../../components/FooterSection";

const portfolioData = {
  "fintech-lending-cloud": {
    title: "Fintech Lending Cloud",
    industry: "FinTech",
    client: "Leading Digital Lending Platform",
    subtitle: "Modernized lending infrastructure for compliance and scale",
    overview:
      "A fast-growing digital lending platform was constrained by a monolithic architecture that made it difficult to release new features, meet compliance requirements, and scale operations. The legacy system caused frequent deployment delays, lacked audit trails for SOC2 compliance, and couldn't handle increasing loan application volume.",
    challenge: {
      title: "The Challenge",
      points: [
        "Monolithic architecture blocked rapid feature releases",
        "Manual compliance tracking created audit risks",
        "Infrastructure couldn't scale with growing demand",
        "Poor observability made troubleshooting difficult",
        "Technical debt slowed development velocity",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We architected and delivered a cloud-native platform with clear separation of concerns:",
      points: [
        "Rebuilt frontend with Next.js for server-side rendering and SEO",
        "Created modular Nest.js microservices with clear domain boundaries",
        "Implemented Terraform IaC for reproducible AWS environments",
        "Set up automated audit logging for SOC2 compliance",
        "Configured Elastic Stack for centralized logging and monitoring",
        "Established CI/CD pipelines with automated testing and security scans",
      ],
    },
    results: {
      title: "Business Impact",
      metrics: [
        {
          value: "32%",
          label: "Faster loan approval times",
          description: "Reduced from 48 hours to 33 hours average",
        },
        {
          value: "99.98%",
          label: "System uptime",
          description: "Zero unplanned outages in 6 months post-launch",
        },
        {
          value: "+68%",
          label: "Organic traffic growth",
          description: "SEO-optimized architecture drove visibility",
        },
        {
          value: "3x",
          label: "Faster feature releases",
          description: "From monthly to weekly deployment cycles",
        },
      ],
    },
    technologies: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "AWS (ECS, RDS, S3)",
      "Terraform",
      "Elasticsearch",
      "Redis",
      "PostgreSQL",
    ],
    timeline: "6 months",
    team: "8 engineers + PM + architect",
    testimonial: {
      quote:
        "ArtofQR transformed our infrastructure and engineering culture. We went from quarterly releases to weekly deployments, and our compliance readiness jumped from 60% to 98%.",
      author: "CTO",
      company: "Leading Digital Lending Platform",
    },
  },
  "ai-claims-automation": {
    title: "AI Claims Automation",
    industry: "InsurTech",
    client: "Mid-Market Insurance Carrier",
    subtitle: "LLM-powered claims processing with 8x speed improvement",
    overview:
      "A regional insurance carrier was struggling with a 10-day backlog in claims processing due to manual document review. High error rates and inconsistent decision-making were impacting customer satisfaction and operational costs.",
    challenge: {
      title: "The Challenge",
      points: [
        "10-day average backlog in claims processing",
        "25% error rate in manual document classification",
        "Inconsistent claim approval criteria across teams",
        "No integration between document storage and ServiceNow",
        "High operational costs from manual labor",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We designed and deployed an AI-powered claims automation pipeline:",
      points: [
        "Fine-tuned LLM for insurance document understanding",
        "Built document intelligence pipeline for extraction and classification",
        "Implemented human-in-the-loop workflow for quality assurance",
        "Integrated with ServiceNow for case management",
        "Created confidence scoring system to route edge cases",
        "Developed evaluation framework to monitor model performance",
      ],
    },
    results: {
      title: "Business Impact",
      metrics: [
        {
          value: "8x",
          label: "Faster claim triage",
          description: "From 10 days to 1.3 days average",
        },
        {
          value: "27%",
          label: "Lower operating costs",
          description: "Reduced manual review hours by 75%",
        },
        {
          value: "92%",
          label: "Automation rate",
          description: "Only 8% of claims require human review",
        },
        {
          value: "4.2/5",
          label: "Customer satisfaction",
          description: "Up from 3.1/5 before automation",
        },
      ],
    },
    technologies: [
      "Python",
      "LangChain",
      "Azure OpenAI",
      "FastAPI",
      "ServiceNow",
      "Azure Blob Storage",
      "PostgreSQL",
      "Docker",
    ],
    timeline: "4 months",
    team: "5 engineers + data scientist + ML ops",
    testimonial: {
      quote:
        "The AI automation didn't just speed up our claims process—it made it more consistent and accurate. Our customers are happier, and our team can focus on complex cases that require human judgment.",
      author: "VP of Operations",
      company: "Mid-Market Insurance Carrier",
    },
  },
  "healthcare-marketplace": {
    title: "Healthcare Marketplace",
    industry: "HealthTech",
    client: "Regional Healthcare Network",
    subtitle: "HIPAA-compliant marketplace with native apps",
    overview:
      "A healthcare network operating a patient-provider marketplace was constrained by a legacy PHP monolith. The platform couldn't support new locations, lacked HIPAA-compliant messaging, and had poor mobile experience.",
    challenge: {
      title: "The Challenge",
      points: [
        "Legacy PHP codebase difficult to maintain and extend",
        "No mobile app—mobile web experience was poor",
        "Non-compliant messaging system for patient-provider communication",
        "Couldn't launch new geographic regions without months of customization",
        "Poor observability led to frequent P1 incidents",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We rebuilt the platform with modern architecture and compliance in mind:",
      points: [
        "Migrated to headless CMS (Contentful) for multi-region content",
        "Built GraphQL API layer for flexible data access",
        "Developed React Native apps for iOS and Android",
        "Implemented end-to-end encrypted messaging with audit trails",
        "Deployed on Kubernetes for auto-scaling and resilience",
        "Set up Datadog observability stack with custom dashboards",
      ],
    },
    results: {
      title: "Business Impact",
      metrics: [
        {
          value: "4",
          label: "New regions launched",
          description: "In just 6 weeks post-launch",
        },
        {
          value: "120%",
          label: "YoY booking growth",
          description: "Mobile apps drove 60% of new bookings",
        },
        {
          value: "0",
          label: "P1 incidents",
          description: "Zero critical outages in 9 months",
        },
        {
          value: "4.7/5",
          label: "App store rating",
          description: "Average across iOS and Android",
        },
      ],
    },
    technologies: [
      "React Native",
      "GraphQL",
      "Node.js",
      "Contentful",
      "Kubernetes",
      "Datadog",
      "PostgreSQL",
      "Redis",
    ],
    timeline: "8 months",
    team: "12 engineers + 2 designers + PM",
    testimonial: {
      quote:
        "ArtofQR didn't just rebuild our platform—they helped us scale into new markets faster than we thought possible. The mobile apps have been a game-changer for patient engagement.",
      author: "Chief Digital Officer",
      company: "Regional Healthcare Network",
    },
  },
  "ecommerce-replatform": {
    title: "E-Commerce Replatform",
    industry: "Retail",
    client: "Multi-Brand Fashion Retailer",
    subtitle: "Headless commerce with personalization engine",
    overview:
      "A fashion retailer running on legacy Magento was losing mobile customers due to poor performance and couldn't implement personalization features to compete with larger brands.",
    challenge: {
      title: "The Challenge",
      points: [
        "Poor mobile performance—5.2s average page load",
        "No personalization capabilities",
        "Slow release cycles—6-8 weeks per deployment",
        "Difficult to A/B test and optimize conversion",
        "High infrastructure costs for low performance",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We delivered a modern headless commerce stack optimized for performance:",
      points: [
        "Built Next.js storefront with incremental static regeneration",
        "Integrated Shopify Plus as headless backend",
        "Implemented Algolia for instant search and recommendations",
        "Set up A/B testing framework with segment-based personalization",
        "Deployed on Vercel edge network for global performance",
        "Created component library for rapid feature development",
      ],
    },
    results: {
      title: "Business Impact",
      metrics: [
        {
          value: "45%",
          label: "Mobile conversion lift",
          description: "From 1.8% to 2.6% conversion rate",
        },
        {
          value: "2.1s",
          label: "Average page load",
          description: "59% improvement from 5.2s baseline",
        },
        {
          value: "3x",
          label: "Faster releases",
          description: "Weekly deployments vs. 6-8 week cycles",
        },
        {
          value: "$1.2M",
          label: "Additional annual revenue",
          description: "Attributed to personalization features",
        },
      ],
    },
    technologies: [
      "Next.js",
      "Shopify Plus",
      "Algolia",
      "Vercel",
      "TypeScript",
      "Tailwind CSS",
      "Segment",
      "Google Optimize",
    ],
    timeline: "5 months",
    team: "6 engineers + UX designer + conversion specialist",
    testimonial: {
      quote:
        "The new platform transformed our mobile business. We're finally able to compete on user experience and personalization, and our engineering team can ship new features every week instead of every quarter.",
      author: "VP of E-Commerce",
      company: "Multi-Brand Fashion Retailer",
    },
  },
  "devops-transformation": {
    title: "DevOps Transformation",
    industry: "SaaS",
    client: "B2B Analytics Platform",
    subtitle: "Zero-downtime deployment with GitOps automation",
    overview:
      "A B2B analytics SaaS company was struggling with manual deployment processes that caused frequent outages and slowed feature development. Their engineering team spent more time firefighting than building.",
    challenge: {
      title: "The Challenge",
      points: [
        "Manual deployments caused 3-4 outages per month",
        "No standardized infrastructure—each environment was unique",
        "Slow feature velocity—teams afraid to deploy",
        "Limited monitoring and unclear root cause analysis",
        "No rollback strategy—every incident was a crisis",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We implemented a modern DevOps practice with GitOps principles:",
      points: [
        "Migrated to Kubernetes for container orchestration",
        "Implemented ArgoCD for GitOps-based deployments",
        "Created Terraform modules for infrastructure as code",
        "Built automated testing pipeline with quality gates",
        "Set up comprehensive monitoring with Prometheus and Grafana",
        "Established incident response runbooks and on-call rotation",
      ],
    },
    results: {
      title: "Business Impact",
      metrics: [
        {
          value: "99.99%",
          label: "System uptime",
          description: "Up from 99.2% before transformation",
        },
        {
          value: "12x",
          label: "Faster deployments",
          description: "From 45 minutes to under 4 minutes",
        },
        {
          value: "80%",
          label: "Reduction in incidents",
          description: "From 3-4 per month to 1 every 2 months",
        },
        {
          value: "35%",
          label: "Engineering velocity increase",
          description: "More time building, less firefighting",
        },
      ],
    },
    technologies: [
      "Kubernetes",
      "ArgoCD",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "AWS",
      "Helm",
    ],
    timeline: "3 months",
    team: "3 DevOps engineers + SRE consultant",
    testimonial: {
      quote:
        "This transformation changed our engineering culture. Deploys went from stressful events to routine operations. Our team is more confident, productive, and focused on customer value.",
      author: "VP of Engineering",
      company: "B2B Analytics Platform",
    },
  },
  "mobile-banking-app": {
    title: "Mobile Banking App",
    industry: "FinTech",
    client: "Digital-First Bank",
    subtitle: "Secure banking app with biometric authentication",
    overview:
      "A digital bank needed to replace their outdated mobile app that had poor user experience, security concerns, and couldn't support new financial products in their roadmap.",
    challenge: {
      title: "The Challenge",
      points: [
        "Poor app store ratings (2.8/5 average)",
        "Security audit flagged multiple vulnerabilities",
        "Rigid architecture couldn't support new products",
        "High crash rate (4.2% on Android)",
        "No real-time notifications for transactions",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We built secure, scalable native apps with modern architecture:",
      points: [
        "Developed React Native apps with native modules for security",
        "Implemented biometric authentication and device binding",
        "Built modular architecture to support new financial products",
        "Created real-time notification system with WebSockets",
        "Set up comprehensive error tracking and crash reporting",
        "Implemented feature flags for gradual rollouts",
      ],
    },
    results: {
      title: "Business Impact",
      metrics: [
        {
          value: "4.8/5",
          label: "App store rating",
          description: "Up from 2.8/5 with previous app",
        },
        {
          value: "200k+",
          label: "Downloads in 3 months",
          description: "Exceeded 6-month target",
        },
        {
          value: "92%",
          label: "Feature adoption",
          description: "Users engaging with new products",
        },
        {
          value: "0.3%",
          label: "Crash rate",
          description: "93% improvement from baseline",
        },
      ],
    },
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Redis",
      "WebSocket",
      "Sentry",
      "Firebase",
    ],
    timeline: "7 months",
    team: "10 engineers + product designer + QA lead",
    testimonial: {
      quote:
        "ArtofQR helped us rebuild trust with our customers. The new app is not only more secure and reliable—it's a platform we can build on for years to come.",
      author: "Chief Product Officer",
      company: "Digital-First Bank",
    },
  },
};

async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const data = portfolioData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
        {/* Hero Section */}
        <section className="pt-12 pb-8 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
            <Link
              href="/portfolio"
              className="text-sm uppercase tracking-[0.4em] text-blue-500 hover:text-blue-600 transition-colors"
            >
              ← Portfolio
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 font-semibold">
                {data.industry}
              </span>
              <span>{data.timeline}</span>
              <span>•</span>
              <span>{data.team}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              {data.subtitle}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
              {data.overview}
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-12 bg-gray-50/50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {data.challenge.title}
                </h2>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-4">
                  {data.challenge.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-red-500 font-bold mt-1">×</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-12 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {data.solution.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {data.solution.description}
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-4">
                  {data.solution.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 font-bold mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {data.results.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.results.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-12 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl p-8 md:p-12">
              <div className="text-5xl text-blue-500 mb-6">"</div>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                {data.testimonial.quote}
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {data.testimonial.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {data.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Start a project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                View more case studies
              </Link>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = portfolioData[slug];
  if (!data) {
    return {
      title: "Portfolio | ArtofQR",
    };
  }
  return {
    title: `${data.title} - ${data.industry} | ArtofQR Portfolio`,
    description: data.subtitle,
  };
}

export default PortfolioDetailPage;
