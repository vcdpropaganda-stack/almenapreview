import { Check, ClipboardList, Fingerprint, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const highlights = [
  {
    icon: ClipboardList,
    title: "Processo Claro e Organizado",
    description: "Respeitamos prazos e etapas. Você saberá exatamente o andamento de cada fase do projeto, sem surpresas.",
  },
  {
    icon: Fingerprint,
    title: "Proposta Exclusiva e Autoral",
    description: "Seu projeto é desenvolvido do zero, traduzindo sua personalidade e necessidades em cada detalhe.",
  },
  {
    icon: ShieldCheck,
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Highlights Grid - Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-accent-foreground/5 backdrop-blur-sm border border-accent-foreground/10 rounded-2xl p-8 transition-all duration-500 cursor-default ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${hoveredIndex === index ? "border-sand/50 shadow-xl shadow-sand/10 -translate-y-2 bg-accent-foreground/10" : "hover:border-accent-foreground/20"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-sand/5 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "bg-sand/30 shadow-lg shadow-sand/20 scale-110"
                      : "bg-sand/15"
                  }`}
                >
                  <highlight.icon
                    className={`w-7 h-7 transition-colors duration-300 ${
                      hoveredIndex === index ? "text-sand" : "text-sand/80"
                    }`}
                  />
                </div>

                {/* Number tag */}
                <span className="inline-block text-sand/40 font-display text-4xl font-bold absolute top-6 right-6">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl mb-4 text-accent-foreground">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-accent-foreground/70 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
