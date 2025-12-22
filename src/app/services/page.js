import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import ServicesCards from "./ServicesCards";

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
      <section className="pt-24 pb-12 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build, launch, and scale with one partner
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Choose a single capability or assemble a cross-functional pod.
            Every engagement includes product leadership, program management,
            and enterprise-grade delivery standards.
          </p>
        </div>
      </section>

      {/* Cards */}
      <ServicesCards/>

      <FooterSection />
    </main>
  );
}
