import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import ServicesCards from "./ServicesCards";
import ServicesHero from "./ServicesHero";
import ServicesBanner from "./ServicesBanner";

export const metadata = {
  title: "IT Services - Web Development & DevOps Solutions | SUH Tech",
  description:
    "Comprehensive IT services by SUH Tech Private Limited: Web application development, DevOps automation, cloud infrastructure, CI/CD pipelines, mobile app development, and enterprise solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Header */}
      <section className="pt-12 pb-12 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4 text-center">
            Services
          </p>

          <div className="pt-24">
            {/* 🔥 IMAGE SECTION */}
            <ServicesHero />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pt-14">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
                Lorem ipsum dolor sit{" "}
                <span className="text-[#6F44FB]">amet consectetur</span>. kshi
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-500 max-w-md">
                Lorem ipsum dolor sit amet consectetur. kshi uemnamet consectetur. hello
              </p>

              <button className="px-7 py-3 w-fit rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-medium shadow-md">
                Btn1
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Cards */}
      <ServicesCards className="pt-24" />

      <ServicesBanner />

      <FooterSection />
    </main>
  );
}
