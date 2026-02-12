import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "floating";
  children?: React.ReactNode;
  className?: string;
}

const WHATSAPP_NUMBER = "5519974076412";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da Almena Arquitetura.";

export const WhatsAppButton = ({
  variant = "primary",
  children,
  className = "",
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-[#128C7E] group flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    );
  }

  const baseStyles = "inline-flex items-center justify-center gap-3 font-medium rounded-lg transition-all duration-300 text-center group";
  
  const variantStyles = {
    primary: "bg-accent text-accent-foreground hover:bg-[#25D366] hover:text-white px-8 py-4 text-base lg:text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105",
    secondary: "bg-accent text-accent-foreground hover:bg-[#25D366] hover:text-white px-6 py-3 text-sm lg:text-base shadow-md hover:shadow-xl hover:-translate-y-0.5",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <FaWhatsapp className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      {children || "Solicitar orçamento no WhatsApp"}
    </a>
  );
};
