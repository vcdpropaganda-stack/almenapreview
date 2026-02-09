import { useInView } from "@/hooks/useInView";
import { User } from "lucide-react";

const projectStages = [
  {
    number: "1ª",
    title: "Criação",
    description: "Briefing com o Cliente.",
  },
  {
    number: "2ª",
    title: "Estudo Preliminar",
    description: "A ideia ganha forma. Apresentamos as primeiras plantas com opções de layout, definindo a circulação, os espaços e a funcionalidade.",
  },
  {
    number: "3ª",
    title: "Anteprojeto",
    description: "Apresentação de layout e imagens 3D. Definimos materiais, revestimentos e acabamentos.",
  },
  {
    number: "4ª",
    title: "Projeto Executivo",
    description: "Detalhamos tudo para a construção. É o 'manual de instruções' completo para que a equipe de obra execute tudo sem erros.",
  },
];

export const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 max-w-5xl mx-auto">
            {/* Left Column - Architect Photo Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-80 lg:w-80 lg:h-96 bg-secondary/50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-primary/30">
                <User className="w-16 h-16 text-primary/40 mb-4" />
                <span className="text-muted-foreground text-sm text-center px-4">
                  Foto a ser inserida
                </span>
              </div>
            </div>

            {/* Right Column - About Text */}
            <div className="text-center lg:text-left">
              {/* Section Label */}
              <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
                Sobre Nós
              </span>

              {/* Title */}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                Criamos ambientes que contam a{" "}
                <span className="italic text-primary">sua história</span>
              </h2>

              {/* Description */}
              <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
                <p>
                  A <strong className="text-foreground">Almena Arquitetura</strong>{" "}
                  nasceu da paixão por transformar espaços em lares únicos e
                  acolhedores. Com anos de experiência em design de interiores e
                  reformas residenciais, nossa equipe se dedica a entender cada
                  detalhe do seu estilo de vida para criar ambientes que refletem
                  sua personalidade.
                </p>
                <p>
                  Acreditamos que cada projeto é uma oportunidade de unir
                  funcionalidade e beleza, criando espaços que não apenas encantam
                  visualmente, mas também proporcionam conforto e praticidade no dia
                  a dia.
                </p>
                <p>
                  Atendemos <strong className="text-foreground">Campinas</strong> e
                  toda a região metropolitana, oferecendo um serviço personalizado
                  do primeiro contato até a entrega final do projeto.
                </p>
              </div>
            </div>
          </div>

          {/* Project Stages Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
                Como Trabalhamos
              </span>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                Etapas do <span className="italic text-primary">Projeto</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectStages.map((stage, index) => (
                <div
                  key={index}
                  className={`relative bg-secondary/30 rounded-xl p-6 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-display font-semibold text-primary">
                      {stage.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Etapa
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
