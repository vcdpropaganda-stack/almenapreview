import { useInView } from "@/hooks/useInView";
import { useEffect } from "react";

export const TestimonialsSection = () => {
  const { ref, isInView } = useInView();

  useEffect(() => {
    // Load Elfsight script once
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
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

        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="elfsight-app-524cd1ce-fd26-4cf1-b062-5a5387bcd4b5"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};
