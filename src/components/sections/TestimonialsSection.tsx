import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Mariana Costa",
    location: "Campinas, SP",
    text: "A equipe da Almena superou todas as minhas expectativas. Transformaram meu apartamento em um espaço que realmente reflete minha personalidade. O atendimento foi impecável do início ao fim.",
  },
  {
    name: "Ricardo Almeida",
    location: "Valinhos, SP",
    text: "Profissionalismo e bom gosto em cada detalhe. A reforma da nossa casa foi conduzida com muito cuidado e dentro do prazo. Recomendo de olhos fechados!",
  },
  {
    name: "Fernanda Oliveira",
    location: "Indaiatuba, SP",
    text: "O projeto de interiores ficou ainda melhor do que eu imaginava. A Almena conseguiu entender exatamente o que eu queria e traduziu isso em um ambiente lindo e funcional.",
  },
];

export const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            O que nossos clientes{" "}
            <span className="italic text-primary">dizem</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl p-8 shadow-sm relative transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
