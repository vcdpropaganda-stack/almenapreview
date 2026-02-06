import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

import projectQuartoValinhos from "@/assets/project-quarto-valinhos.png";
import projectCozinhaRibeirao from "@/assets/project-cozinha-ribeirao.png";
import projectGuaiases from "@/assets/project-guaiases.jpg";
import projectQuintasVerde from "@/assets/project-quintas-verde.jpg";
import projectCoberturaCampinas from "@/assets/project-cobertura-campinas.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { image: projectQuartoValinhos, title: "Quarto Piacente - Valinhos", category: "Design de Interiores" },
  { image: projectCozinhaRibeirao, title: "Cozinha Apartamento 242 - Ribeirão Preto", category: "Design de Interiores" },
  { image: projectGuaiases, title: "Edifício Guaiases - Campinas", category: "Retrofit de Fachada" },
  { image: projectQuintasVerde, title: "Condomínio Quintas do Verde - Campinas", category: "Retrofit de Fachada" },
  { image: projectCoberturaCampinas, title: "Cobertura Centro de Campinas", category: "Em Andamento" },
  { image: project6, title: "Living Contemporâneo", category: "Projeto Completo" },
];

export const ProjectsSection = () => {
  const { ref, isInView } = useInView();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Projetos que{" "}
            <span className="italic text-primary">inspiram</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Conheça alguns dos nossos trabalhos mais recentes e inspire-se para
            transformar seu espaço.
          </p>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl aspect-[4/5] transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-off-white/70 text-sm uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-off-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative aspect-[4/5]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-off-white/70 text-sm uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl text-off-white mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
