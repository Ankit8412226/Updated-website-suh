import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import IndustriesSection from "../components/IndustriesSection";

export const metadata = {
  title: "Industries We Serve | ArtofQR",
  description:
    "Specialized technology solutions for FinTech, HealthTech, InsurTech, E-commerce, and more. Deep domain expertise meets engineering excellence.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <IndustriesSection />
      </div>
      <FooterSection />
    </main>
  );
}
