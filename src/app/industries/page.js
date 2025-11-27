import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import IndustriesSection from "../components/IndustriesSection";
// import CoreValue from "../../app/components/CoreValues"
// import OurTeam from "../../app/components/OurTeam"
import FoundersVision from "../components/Founder-vision";
export const metadata = {
  title: "About Us We Serve | ArtofQR",
  description:
    "Specialized technology solutions for FinTech, HealthTech, InsurTech, E-commerce, and more. Deep domain expertise meets engineering excellence.",
      icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
              <FoundersVision />
      </div>
      {/* <div className="mt-16 md:mt-20 lg:mt-24">
        <CoreValue />
      </div> */}
      <div className="mt-16 md:mt-20 lg:mt-24">
        <IndustriesSection />
      </div>
      <FooterSection />
    </main>
  );
}
