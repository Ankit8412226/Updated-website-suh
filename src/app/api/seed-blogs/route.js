import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    // DELETE EXISTING BLOGS TO START FRESH as per user request
    await Blog.deleteMany({});

    const blogs = [
      {
        title: "How to Stand Up a CI/CD Pipeline in 14 Days",
        slug: "how-to-stand-up-a-cicd-pipeline-in-14-days",
        category: "DevOps",
        excerpt: "Learn the step-by-step process of setting up a robust CI/CD pipeline for your development team, ensuring faster and more reliable deployments.",
        content: `
<h2>Introduction</h2>
<p>In today's fast-paced software development world, Continuous Integration and Continuous Deployment (CI/CD) are essential. A well-structured pipeline can significantly reduce time-to-market and improve code quality.</p>
<h3>Step 1: Assess Your Current Workflow</h3>
<p>Before building, understand your current process. Identify bottlenecks and manual steps that can be automated.</p>
<h3>Step 2: Choose the Right Tools</h3>
<p>Select tools that integrate well with your stack. Jenkins, GitLab CI, and GitHub Actions are popular choices.</p>
<h3>Step 3: Automate Testing</h3>
<p>Automated tests are the backbone of CI/CD. Ensure you have unit, integration, and end-to-end tests in place.</p>
<h3>Conclusion</h3>
<p>Setting up a CI/CD pipeline doesn't have to be overwhelming. By breaking it down into manageable steps, you can have a functional pipeline in just two weeks.</p>
            `,
        imageUrl: "/images/Deployment.png",
        isPublished: true,
        author: "DevOps Team",
        readTime: "8 min read"
      },
      {
        title: "AI Product Roadmaps: From POC to Production",
        slug: "ai-product-roadmaps-from-poc-to-production",
        category: "AI & Automation",
        excerpt: "Navigating the journey of building AI products from the initial Proof of Concept to a full-scale production environment.",
        content: `
<h2>The AI Journey</h2>
<p>Moving from a Proof of Concept (POC) to production is a challenging phase for many AI projects. This guide outlines the key considerations for a successful transition.</p>
<h3>Validating the POC</h3>
<p>Ensure your POC addresses a real user need and that the model performs well on representative data.</p>
<h3>Scalability</h3>
<p>Production environments require robust infrastructure. Consider using Kubernetes for container orchestration and scaling.</p>
<h3>Monitoring and Maintenance</h3>
<p>AI models can drift over time. Implement monitoring to track performance and retrain models as necessary.</p>
            `,
        imageUrl: "/images/Innovation.png",
        isPublished: true,
        author: "AI Research Team",
        readTime: "6 min read"
      },
      {
        title: "Technical SEO Checklist for Next.js & Headless CMS",
        slug: "technical-seo-checklist-for-nextjs-headless-cms",
        category: "SEO & Growth",
        excerpt: "Maximize your website's visibility with this comprehensive technical SEO checklist specifically designed for Next.js applications.",
        content: `
<h2>Optimizing Next.js for SEO</h2>
<p>Next.js offers excellent SEO capabilities out of the box, but there are specific optimizations you should implement to rank higher.</p>
<h3>Server-Side Rendering (SSR)</h3>
<p>Leverage SSR to ensure search engines can crawl your content effectively.</p>
<h3>Meta Tags and Open Graph</h3>
<p>Dynamically generate meta tags for each page to improve click-through rates on social media and search results.</p>
<h3>Sitemap and Robots.txt</h3>
<p>Don't forget to generate a dynamic sitemap and configure your robots.txt file to guide crawlers.</p>
             `,
        imageUrl: "/images/Rectangle_Web_Development.svg",
        isPublished: true,
        author: "SEO Specialist",
        readTime: "9 min read"
      },
      {
        title: "Security Hardening Playbook for SaaS Startups",
        slug: "security-hardening-playbook-for-saas-startups",
        category: "Cybersecurity",
        excerpt: "Essential security practices for SaaS startups to protect customer data and build trust from day one.",
        content: `
<h2>Security First</h2>
<p>For SaaS startups, security is not just a feature; it's a requirement. Here is a playbook to harden your security posture.</p>
<h3>Identity and Access Management (IAM)</h3>
<p>Implement strict IAM policies. Use Multi-Factor Authentication (MFA) for all critical accounts.</p>
<h3>Data Encryption</h3>
<p>Encrypt data both in transit and at rest. Use industry-standard protocols like TLS and AES.</p>
<h3>Regular Audits</h3>
<p>Conduct regular security audits and penetration testing to identify and fix vulnerabilities.</p>
            `,
        imageUrl: "/images/Testing.png",
        isPublished: true,
        author: "Security Team",
        readTime: "7 min read"
      }
    ];

    await Blog.insertMany(blogs);
    return NextResponse.json({ message: 'Cleared old blogs and seeded 4 new blogs successfully', success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
