import { Navbar } from "@/components/nexus/Navbar";
import { Hero } from "@/components/nexus/Hero";
import {
  Services,
  About,
  Differentials,
  Portfolio,
  Testimonials,
  FinalCta,
} from "@/components/nexus/Sections";
import { Contact } from "@/components/nexus/Contact";
import { Footer } from "@/components/nexus/Footer";

const title = "Nexus — Desenvolvimento de Sites e Soluções Digitais";
const description =
  "A Nexus cria sites, landing pages e e-commerces sob medida: performance extrema, design responsivo e SEO otimizado. Peça seu orçamento.";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Portfolio />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
