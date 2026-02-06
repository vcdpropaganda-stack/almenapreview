import { Sofa, Building2, PenTool, Users, RefreshCw } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const services = [
  {
    icon: Sofa,
    title: "Design de Interiores",
    description:
      "Projetos completos de decoração e ambientação, harmonizando cores, texturas e mobiliário para criar espaços únicos e funcionais.",
  },
  {
    icon: Building2,
    title: "Reformas Residenciais",
    description:
      "Acompanhamento completo de reformas, desde o planejamento até a execução, garantindo qualidade e cumprimento de prazos.",
  },
  {
    icon: PenTool,
    title: "Projetos Personalizados",
    description:
      "Desenvolvimento de projetos sob medida para casas e apartamentos, respeitando seu estilo e necessidades específicas.",
  },
  {
    icon: Users,
    title: "Consultoria Arquitetônica",
    description:
      "Orientação profissional para otimizar espaços, escolher materiais e tomar as melhores decisões para seu projeto.",
  },
  {
    icon: RefreshCw,
    title: "Retrofit de Fachadas",
    description:
      "Revitalização e modernização de fachadas de edifícios, com estudos de cores e materiais para valorizar o patrimônio.",
  },
];

export const ServicesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Soluções completas para{" "}
            <span className="italic text-primary">seu lar</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Do conceito à execução, oferecemos tudo o que você precisa para
            transformar seus ambientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton variant="secondary">
            Consulte nossos serviços
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
