import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CtaButton({ className, onClick, ...props }: CtaButtonProps) {
  return (
    <Button
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base lg:text-lg py-6 px-8 lg:py-8 lg:px-10 rounded-md shadow-lg shadow-primary/30 animate-pulsating-glow transform transition-transform hover:scale-105 uppercase tracking-wider",
        className
      )}
      onClick={onClick}
      {...props}
    >
      QUERO FAZER ELA GOZAR COMIGO
    </Button>
  );
}
