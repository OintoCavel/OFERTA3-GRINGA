import { Check, Lock, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Button } from "../ui/button";

export function OfferSection() {
  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-card rounded-xl shadow-2xl shadow-black/40 text-center text-primary-foreground p-8 lg:p-12">
          <h2 className="text-4xl lg:text-5xl font-black uppercase">Quanto vai custar tudo isso?</h2>
          
          <div className="my-10 text-left space-y-4 text-lg border-b border-border pb-6">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Acesso Vitalício</span>
              <span className="line-through">R$97,00</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Bônus Exclusivos</span>
              <span className="line-through">R$47,00</span>
            </div>
          </div>

          <div className="my-8 flex flex-col items-center">
            <span className="text-xl line-through opacity-70">De R$144</span>
            <span className="text-5xl lg:text-7xl font-black my-2 text-yellow-400">TOTAL: R$27</span>
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
