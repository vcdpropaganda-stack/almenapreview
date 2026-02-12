import logo from "@/assets/logo-almena.png";

export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-off-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Almena Arquitetura"
            className="h-12 w-auto invert brightness-200 opacity-80"
          />

          {/* Divider */}
          <div className="w-16 h-px bg-off-white/20" />

          {/* Credits */}
          <p className="text-sm text-off-white/60">
            site desenvolvido por:{" "}
            <a
              href="https://vocedigitalpropaganda.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-off-white/80 hover:text-off-white transition-colors underline underline-offset-2"
            >
              VOCÊ DIGITAL PROPAGANDA
            </a>
          </p>

          {/* Copyright */}
          <p className="text-xs text-off-white/40">
            © {new Date().getFullYear()} Almena Arquitetura. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
