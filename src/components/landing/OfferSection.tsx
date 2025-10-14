import { Check, Lock, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Button } from "../ui/button";

export function OfferSection() {
  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-xl shadow-2xl shadow-primary/40 text-center text-primary-foreground p-8 lg:p-16">
          <h2 className="text-4xl lg:text-6xl font-black uppercase">Oferta Exclusiva</h2>
          <p className="mt-4 text-xl font-bold">Acesso imediato a todo o método por um preço ridículo.</p>

          <div className="my-10 flex flex-col items-center">
            <span className="text-2xl line-through opacity-70">De R$97</span>
            <span className="text-6xl lg:text-8xl font-black my-2">POR R$27</span>
            <span className="text-xl">ou 12x de R$2,70</span>
          </div>
          
          <div className="text-left max-w-md mx-auto space-y-4 text-lg">
            <div className="flex items-center gap-3">
              <Check className="h-6 w-6" />
              <span>Acesso vitalício ao curso completo</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-6 w-6" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-white bg-black/20 p-3 rounded-md">
              <Award className="h-6 w-6 text-yellow-400" />
              <span>BÔNUS: Aula "Manipulação verbal no sexo"</span>
            </div>
          </div>

          <div className="mt-12">
            <CtaButton 
              className="bg-white text-primary hover:bg-gray-200 animate-none shadow-lg shadow-black/30"
            />
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
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
