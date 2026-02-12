import { useInView } from "@/hooks/useInView";
import { Lightbulb, PencilRuler, Box, HardHat, ArrowRight } from "lucide-react";
import { useState } from "react";
import gabrielaPhoto from "@/assets/gabriela-almena.png";

const projectStages = [
  {
    number: "01",
    title: "Criação",
    description: "Briefing com o Cliente.",
    detail: "Ouvimos suas necessidades, desejos e estilo de vida para entender o projeto ideal.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Estudo Preliminar",
    description: "A ideia ganha forma. Apresentamos as primeiras plantas com opções de layout, definindo a circulação, os espaços e a funcionalidade.",
    detail: "Plantas baixas, fluxos e primeiras definições de ambientes.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Anteprojeto",
    description: "Apresentação de layout e imagens 3D. Definimos materiais, revestimentos e acabamentos.",
    detail: "Visualize seu projeto em 3D antes da execução.",
    icon: Box,
  },
  {
    number: "04",
    title: "Projeto Executivo",
    description: "Detalhamos tudo para a construção. É o 'manual de instruções' completo para que a equipe de obra execute tudo sem erros.",
    detail: "Documentação técnica completa para execução perfeita.",
    icon: HardHat,
  },
];

export const AboutSection = () => {
  const { ref, isInView } = useInView();
  const [activeStage, setActiveStage] = useState(0);

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
              <div className="w-64 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={gabrielaPhoto}
                  alt="Gabriela - Almena Arquitetura"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - About Text */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
                Sobre Nós
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                Criamos ambientes que contam a{" "}
                <span className="italic text-primary">sua história</span>
              </h2>
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

          {/* Project Stages - Interactive */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
                Como Trabalhamos
              </span>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                Etapas do <span className="italic text-primary">Projeto</span>
              </h3>
            </div>

            {/* Desktop: Interactive timeline */}
            <div className="hidden md:block">
              {/* Progress bar */}
              <div className="relative mb-12">
                <div className="h-0.5 bg-secondary w-full absolute top-5" />
                <div
                  className="h-0.5 bg-primary absolute top-5 transition-all duration-700 ease-out"
                  style={{ width: `${((activeStage) / (projectStages.length - 1)) * 100}%` }}
                />
                <div className="flex justify-between relative">
                  {projectStages.map((stage, index) => {
                    const Icon = stage.icon;
                    const isActive = index === activeStage;
                    const isPast = index < activeStage;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveStage(index)}
                        className="flex flex-col items-center group cursor-pointer focus:outline-none"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? "bg-primary text-primary-foreground scale-125 shadow-lg"
                              : isPast
                              ? "bg-primary/80 text-primary-foreground"
                              : "bg-secondary text-muted-foreground group-hover:bg-primary/20"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`mt-3 text-sm font-medium transition-colors duration-300 ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {stage.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active stage detail card */}
              <div className="relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 p-10 min-h-[200px]">
                {projectStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index === activeStage
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-8 absolute inset-0 p-10 pointer-events-none"
                      }`}
                    >
                      <div className="flex items-start gap-8">
                        <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-9 h-9 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-5xl font-display font-bold text-primary/20">
                              {stage.number}
                            </span>
                            <h4 className="font-display text-2xl text-foreground">
                              {stage.title}
                            </h4>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Navigation arrows */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button
                    onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                    disabled={activeStage === 0}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveStage(Math.min(projectStages.length - 1, activeStage + 1))}
                    disabled={activeStage === projectStages.length - 1}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile: Swipeable cards */}
            <div className="md:hidden space-y-4">
              {projectStages.map((stage, index) => {
                const Icon = stage.icon;
                const isOpen = index === activeStage;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStage(isOpen ? -1 : index)}
                    className={`w-full text-left rounded-xl border transition-all duration-500 ${
                      isOpen
                        ? "bg-secondary/50 border-primary/30 shadow-md"
                        : "bg-secondary/20 border-border/30"
                    }`}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-primary font-medium tracking-wider uppercase">
                          Etapa {stage.number}
                        </span>
                        <h4 className="font-display text-lg text-foreground">{stage.title}</h4>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
