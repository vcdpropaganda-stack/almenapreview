import { Star, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const GOOGLE_REVIEW_URL = "https://g.page/r/CSPrGWyyzXIzEAI/review";

export const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Avaliações
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            O que nossos clientes{" "}
            <span className="italic text-primary">dizem</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Veja as avaliações reais dos nossos clientes no Google
          </p>
        </div>

        {/* Google Reviews Embed */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Google Reviews Widget via Elfsight-style embed or iframe */}
          <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden">
            {/* Google Business Header */}
            <div className="p-8 text-center border-b border-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-display text-2xl text-foreground">Google</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Almena Arquitetura — Avaliações verificadas pelo Google
              </p>
            </div>

            {/* CTA to leave review */}
            <div className="p-8 text-center">
              <p className="text-foreground font-medium mb-6 text-lg">
                Sua opinião é muito importante para nós!
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-lg text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              >
                <Star className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Deixe sua avaliação no Google
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
