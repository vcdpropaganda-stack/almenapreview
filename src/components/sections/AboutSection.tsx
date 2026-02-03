import { useInView } from "@/hooks/useInView";

export const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "10+", label: "Anos de Experiência" },
              { number: "200+", label: "Projetos Realizados" },
              { number: "150+", label: "Clientes Satisfeitos" },
              { number: "100%", label: "Dedicação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
