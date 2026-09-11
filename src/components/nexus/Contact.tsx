import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().max(30, "Telefone muito longo").optional(),
  service: z.string().trim().min(1, "Selecione um serviço"),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o projeto").max(1000),
});

const services = [
  "Desenvolvimento de Sites",
  "Landing Page",
  "E-commerce",
  "Site Institucional",
  "Manutenção & Suporte",
];

export function Contact() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = schema.safeParse({ ...data, service });

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      setService("");
      toast.success("Solicitação enviada!", {
        description: "Retornamos o contato em até 24 horas úteis.",
      });
    }, 700);
  }

  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="font-display text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Contato
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Vamos conversar sobre o seu projeto
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Preencha o formulário e receba um orçamento personalizado. Quanto mais detalhes você
              trouxer, mais preciso será o nosso plano.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              {[
                "Resposta em até 24 horas úteis",
                "Diagnóstico gratuito da sua presença digital",
                "Proposta com escopo, prazo e investimento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" name="name" maxLength={100} placeholder="Seu nome completo" />
                  {errors['name'] && <p className="text-xs text-destructive">{errors['name']}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder="voce@empresa.com"
                  />
                  {errors['email'] && <p className="text-xs text-destructive">{errors['email']}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone (opcional)</Label>
                  <Input id="phone" name="phone" maxLength={30} placeholder="(11) 90000-0000" />
                  {errors['phone'] && <p className="text-xs text-destructive">{errors['phone']}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors['service'] && <p className="text-xs text-destructive">{errors['service']}</p>}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Sobre o projeto</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Conte o objetivo, prazo desejado e referências que você gosta."
                />
                {errors['message'] && <p className="text-xs text-destructive">{errors['message']}</p>}
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                disabled={sending}
                className="mt-7 h-12 w-full text-base"
              >
                {sending ? "Enviando..." : "Solicitar Orçamento"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
