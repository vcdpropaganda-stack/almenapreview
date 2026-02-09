import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const highlights = [
  {
    icon: Check,
    title: "Atendimento Personalizado",
    description: "Cada projeto é único. Ouvimos suas necessidades e criamos soluções sob medida.",
  },
  {
    icon: Check,
    title: "Projetos Funcionais e Estéticos",
    description: "Unimos beleza e praticidade em cada ambiente que projetamos.",
  },
  {
    icon: Check,
    title: "Acompanhamento Completo",
    description: "Do primeiro contato à entrega final, estamos ao seu lado em cada etapa.",
  },
  {
    icon: Check,
    title: "Foco em Conforto e Beleza",
    description: "Ambientes que encantam visualmente e proporcionam bem-estar no dia a dia.",
  },
  {
    icon: Check,
    title: "Processo Claro e Organizado",
    description: "Respeitamos prazos e etapas. Você saberá exatamente o andamento de cada fase do projeto, sem surpresas.",
  },
  {
    icon: Check,
    title: "Proposta Exclusiva e Autoral",
    description: "Seu projeto é desenvolvido do zero, traduzindo sua personalidade e necessidades em cada detalhe.",
  },
  {
    icon: Check,
    title: "Tranquilidade e Segurança",
    description: "Antecipamos soluções técnicas para evitar imprevistos. Nosso foco é que sua experiência seja leve do início ao fim.",
  },
  {
    icon: Check,
    title: "Imagens 3D Renderizadas",
    description: "Visualize seu projeto antes da execução com renders realistas que trazem clareza e confiança na tomada de decisão.",
  },
];

export const HighlightsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-sand font-medium tracking-widest text-sm uppercase mb-4">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Nossos <span className="italic">diferenciais</span>
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-sand/20 flex items-center justify-center mx-auto mb-6">
                <highlight.icon className="w-8 h-8 text-sand" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl mb-4">
                {highlight.title}
              </h3>
              <p className="text-accent-foreground/80 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
