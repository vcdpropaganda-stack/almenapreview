import { useInView } from "@/hooks/useInView";
import { FaWhatsapp } from "react-icons/fa";

export const CTASection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contato" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight">
            Pronto para transformar seu{" "}
            <span className="italic">espaço</span>?
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/90 text-base lg:text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato agora mesmo e agende uma conversa sem compromisso.
            Vamos entender seu projeto e mostrar como podemos ajudar a criar o
            ambiente dos seus sonhos.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/5519999999999?text=Olá! Gostaria de saber mais sobre os serviços da Almena Arquitetura."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-10 py-5 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
          >
            <FaWhatsapp className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            Falar com a arquiteta no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
