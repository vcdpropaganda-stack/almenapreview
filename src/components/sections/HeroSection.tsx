import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-interior.jpg";
import logo from "@/assets/logo-almena.png";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior design moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <img
            src={logo}
            alt="Almena Arquitetura"
            className="h-16 lg:h-20 w-auto mb-8 animate-fade-in invert brightness-200"
          />

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-off-white leading-tight mb-6 animate-slide-up">
            Transformamos sua casa em um espaço que{" "}
            <span className="italic">reflete quem você é</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-off-white/90 mb-10 max-w-2xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Design de interiores personalizado e reformas residenciais que
            combinam funcionalidade, estética e conforto. Atendemos Campinas e
            região.
          </p>

          {/* CTA */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <WhatsAppButton />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-off-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-off-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
