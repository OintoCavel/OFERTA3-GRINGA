import { Check, Lock, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Button } from "../ui/button";

export function OfferSection() {
  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-md w-full mx-auto bg-card rounded-xl shadow-2xl shadow-black/40 text-center text-primary-foreground p-8 lg:p-12">
          <h2 className="text-4xl lg:text-5xl font-black uppercase">Oferta Especial</h2>
          <p className="mt-4 text-lg text-muted-foreground">Adquira hoje o acesso completo com um desconto imperdível.</p>
          
          <div className="my-8 flex flex-col items-center justify-center">
            <span className="text-2xl lg:text-3xl font-bold line-through text-muted-foreground">De R$97</span>
            <div className="flex items-baseline my-2">
                <span className="text-lg lg:text-xl font-bold mr-2">POR APENAS</span>
                <span className="text-6xl lg:text-7xl font-black text-primary">R$27</span>
            </div>
            <span className="text-base text-muted-foreground">ou 12x de R$2,70</span>
          </div>

          <div className="mt-10">
            <CtaButton />
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="h-5 w-5" />
              <span>Privacidade Protegida</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-5 w-5" />
              <span>7 Dias de Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
