import OurProject from "../../app/components/ourProjects";
import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Portfolio at ArtofQR | Join Our Team",
  description:
    "Build your career at ArtofQR. Work on challenging projects with cutting-edge technologies. We're hiring engineers, designers, and product leaders.",
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar />

      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <OurProject />
      </div>

      <FooterSection />
    </main>
  );
}
