import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import CareersSection from "../components/CareersSection";

export const metadata = {
  title: "Careers at ArtofQR | Join Our Team",
  description:
    "Build your career at ArtofQR. Work on challenging projects with cutting-edge technologies. We're hiring engineers, designers, and product leaders.",
      icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <CareersSection />
      </div>
      <FooterSection />
    </main>
  );
}
