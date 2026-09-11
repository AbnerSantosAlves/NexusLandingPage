import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero3d from "@/assets/hero-3d.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <div
        className="absolute top-[-12rem] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Desenvolvimento web sob medida
          </span>

          <h1 className="font-display mt-7 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Transformamos ideias em{" "}
            <span className="text-gradient-blue">experiências digitais</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Criamos sites, landing pages e plataformas de alta performance, com código limpo, design
            impecável e foco total em conversão. Cada projeto é construído do zero para o seu
            negócio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="glow" size="lg" className="h-12 px-8 text-base">
              <a href="https://wa.me/5513998068169">
                Solicitar Orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="lg" className="h-12 px-8 text-base">
              <a href="#portfolio">Ver Portfólio</a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["120+", "Projetos"],
              ["98%", "Retenção"],
              ["1.2s", "Load médio"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            className="absolute inset-6 rounded-full bg-primary/25 blur-[90px]"
            aria-hidden="true"
          />
          <img
            src={hero3d}
            alt="Forma geométrica abstrata com iluminação azul representando a tecnologia da Nexus"
            width={1200}
            height={1200}
            className="animate-float relative mx-auto w-full max-w-lg mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  );
}
