import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import BlogResourcesSection from "../components/BlogResourcesSection";

export const metadata = {
  title: "Insights & Resources | ArtofQR",
  description:
    "Technical articles, case studies, and industry insights from our engineering team. Learn about modern web development, DevOps, AI, and cloud architecture.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <BlogResourcesSection />
      </div>
      <FooterSection />
    </main>
  );
}
