import Hero from "./components/Home/Hero";
import DeliveredProjects from "./components/Home/DeliveredProjects";
import BentoGrid from "./components/Home/BentoGrid";
import InNumbers from "./components/Home/InNumbers";
import TrustedBy from "./components/Home/TrustedBy";
import Testimonials from "./components/Home/Testimonials";
import OurProducts from "./components/Home/OurProducts";
import CTA from "./components/Home/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="space-y-32">
        <DeliveredProjects />
        <BentoGrid />
        <InNumbers />
        <TrustedBy />
        <Testimonials />
        <OurProducts />
        <CTA />
      </section>
    </>
  );
}
