import {
  Code2,
  Gauge,
  Headphones,
  LayoutTemplate,
  LifeBuoy,
  Quote,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Building2,
  Target,
  Zap,
} from "lucide-react";
import { Reveal } from "./Reveal";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-display text-xs font-semibold tracking-[0.25em] text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Sites",
    text: "Sites sob medida, construídos com código próprio, rápidos, seguros e fáceis de manter.",
  },
  {
    icon: Target,
    title: "Landing Pages de Alta Conversão",
    text: "Páginas desenhadas para vender: copy estruturada, testes e otimização contínua.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Lojas virtuais com checkout fluido, integrações de pagamento e gestão simples.",
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    text: "Presença digital sólida que traduz a autoridade e o posicionamento da sua marca.",
  },
  {
    icon: LifeBuoy,
    title: "Manutenção & Suporte Contínuo",
    text: "Atualizações, monitoramento, backups e evolução constante do seu produto.",
  },
  {
    icon: LayoutTemplate,
    title: "Design de Interface",
    text: "UI/UX pensado para clareza, acessibilidade e identidade visual consistente.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionTitle
            eyebrow="Serviços"
            title={<>Tudo que sua marca precisa para existir bem na web</>}
            description="Do primeiro rascunho ao deploy — e depois dele. Cuidamos de todas as camadas do seu projeto digital."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="glass-card group h-full rounded-2xl p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all group-hover:shadow-[var(--glow)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-x-0 top-1/3 -z-10 h-72 bg-primary/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="font-display text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Sobre a Nexus
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Conectando negócios ao que a tecnologia tem de melhor
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              A Nexus nasceu da inquietação de ver boas empresas presas a sites lentos, genéricos e
              difíceis de atualizar. Reunimos desenvolvedores e designers obcecados por detalhe para
              fazer diferente.
            </p>
            <p>
              Nossa missão é simples: entregar produtos digitais que carregam rápido, comunicam com
              clareza e geram resultado mensurável. Trabalhamos em ciclos curtos, com comunicação
              direta e sem burocracia.
            </p>
            <p>
              Inovação e agilidade não são slogans aqui — são o modo como escolhemos cada
              tecnologia, cada linha de código e cada pixel.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-5">
            {[
              ["120+", "Projetos entregues"],
              ["90+", "Clientes satisfeitos"],
              ["99.9%", "Uptime médio"],
              ["7 anos", "De estrada"],
            ].map(([value, label]) => (
              <div key={label} className="glass-card rounded-2xl p-7">
                <p className="font-display text-gradient-blue text-3xl font-bold sm:text-4xl">
                  {value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const perks = [
  { icon: Zap, title: "Performance Extrema", text: "Carregamento abaixo de 1,5s e notas verdes no Core Web Vitals." },
  { icon: Smartphone, title: "Design Responsivo", text: "Experiência impecável do celular ao monitor ultrawide." },
  { icon: Search, title: "SEO Otimizado", text: "Estrutura semântica, dados ricos e indexação limpa desde o dia um." },
  { icon: Headphones, title: "Suporte Ágil", text: "Canal direto com quem desenvolveu. Resposta em até 4 horas úteis." },
];

export function Differentials() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionTitle eyebrow="Diferenciais" title="Por que escolher a Nexus" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-secondary/30 p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                <p.icon className="h-6 w-6 text-primary" />
                <h3 className="font-display mt-5 font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    img: case1,
    title: "Órbita Store",
    type: "E-commerce de moda",
    tags: ["React", "Stripe", "Headless CMS"],
  },
  {
    img: case2,
    title: "Vertex Analytics",
    type: "Plataforma SaaS",
    tags: ["TypeScript", "Dashboard", "API"],
  },
  {
    img: case3,
    title: "Lumen Lançamentos",
    type: "Landing page de alta conversão",
    tags: ["Next", "A/B Test", "SEO"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionTitle
            eyebrow="Portfólio"
            title="Projetos que já estão no ar"
            description="Uma amostra do que construímos para marcas de diferentes setores."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/20">
                <img
                  src={p.img}
                  alt={`Mockup do projeto ${p.title}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[oklch(0.35_0.16_262)]/85 via-background/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs tracking-widest text-primary-foreground/80 uppercase">
                    {p.type}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-bold">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-foreground/25 bg-background/30 px-3 py-1 text-xs backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 group-hover:opacity-0">
                  <h3 className="font-display font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.type}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text: "O site novo derrubou nosso tempo de carregamento pela metade e as vendas subiram 38% em dois meses. Time extremamente técnico e presente.",
    name: "Marina Alves",
    role: "CEO, Órbita Store",
  },
  {
    text: "A Nexus entendeu o produto melhor do que muita gente interna. Entregaram antes do prazo e continuam dando suporte todo mês.",
    name: "Rafael Duarte",
    role: "Head de Produto, Vertex",
  },
  {
    text: "Profissionalismo do briefing ao pós-entrega. A landing page que fizeram bateu 14% de conversão logo na primeira campanha.",
    name: "Camila Prado",
    role: "Marketing, Lumen",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionTitle eyebrow="Depoimentos" title="O que dizem nossos clientes" />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="glass-card h-full rounded-2xl p-7">
                <Quote className="h-7 w-7 text-primary/60" />
                <blockquote className="mt-5 leading-relaxed text-foreground/90">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 py-16">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-[oklch(0.32_0.15_262)] via-[oklch(0.18_0.06_264)] to-background px-6 py-20 text-center">
          <div
            className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/40 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative">
            <Rocket className="mx-auto h-9 w-9 text-primary-foreground" />
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              Pronto para colocar seu projeto no ar?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Conte sua ideia. Em até 24 horas você recebe um plano com escopo, prazo e investimento
              — sem compromisso.
            </p>
            <a
              href="https://wa.me/5513998068169"
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 font-semibold text-primary-foreground shadow-[var(--glow)] transition-all hover:shadow-[var(--glow-strong)]"
            >
              Iniciar meu projeto
              <Gauge className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
