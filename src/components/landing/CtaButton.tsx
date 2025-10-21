import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps extends ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CtaButton({ className, onClick, ...props }: CtaButtonProps) {
  return (
    <Button
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg lg:text-xl py-8 px-10 rounded-md shadow-lg shadow-primary/30 animate-pulsating-glow transform transition-transform hover:scale-105 uppercase tracking-wider",
        className
      )}
      onClick={onClick}
      {...props}
    >
      QUERO FAZER ELA GOZAR COMIGO
      <ArrowRight className="ml-2 h-6 w-6" />
    </Button>
  );
}
