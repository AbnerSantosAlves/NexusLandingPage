import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/nexus-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.16_0.02_265)]/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="Nexus"
            width={79}
            height={64}
            loading="lazy"
            className="h-16 w-auto object-contain object-left"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Estúdio de desenvolvimento web focado em performance, design e resultado. Construímos
            produtos digitais sob medida para marcas que querem crescer.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#contato"
                aria-label={label}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-foreground uppercase">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              ["Início", "#inicio"],
              ["Serviços", "#servicos"],
              ["Portfólio", "#portfolio"],
              ["Sobre", "#sobre"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-foreground uppercase">
            Contato
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              +55 (13) 998068169
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Atendimento 100% remoto — Brasil
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexus. Todos os direitos reservados.</p>
          <p>Feito com precisão e café.</p>
        </div>
      </div>
    </footer>
  );
}
