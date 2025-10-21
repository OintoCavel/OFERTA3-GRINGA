import { Zap, Lock, ShieldCheck, CheckCircle } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Button } from "../ui/button";

export function OfferSection() {
  return (
    <section id="offer" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-md w-full mx-auto bg-card rounded-2xl shadow-2xl shadow-black/40 text-center text-primary-foreground p-6 lg:p-8 border-2 border-destructive">
          
          <div className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full -mt-12 mb-6">
            <Zap className="h-5 w-5" />
            <span>PROMOÇÃO POR TEMPO LIMITADO!</span>
            <Zap className="h-5 w-5" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Quanto vai custar tudo isso?
          </h2>
          
          <div className="mt-8 space-y-4 text-left text-lg text-muted-foreground">
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span>TODOS OS BÔNUS</span>
                <span className="line-through">R$47,00</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span>ACESSO VITALÍCIO AO CURSO</span>
                <span className="line-through">R$47,00</span>
            </div>
          </div>

          <div className="my-8 flex flex-col items-center justify-center">
            <span className="text-xl lg:text-2xl font-bold line-through text-muted-foreground">De R$94,00</span>
            <p className="uppercase text-white font-bold mt-2">Total:</p>
            <div className="flex items-baseline my-2">
                <span className="text-6xl lg:text-8xl font-black text-primary">R$27,00</span>
            </div>
            <p className="text-sm text-muted-foreground">Últimas vagas a esse valor - Valor Promocional no PIX</p>
          </div>

          <div className="mt-10">
            <a href="https://pay.cakto.com.br/egqp7mr_616569" target="_blank" rel="noopener noreferrer" className="w-full block">
              <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg lg:text-xl py-8 px-10 rounded-md shadow-lg shadow-primary/30 transform transition-transform hover:scale-105 uppercase tracking-wider w-full"
              >
                  QUERO FAZER ELA GOZAR COMIGO
              </Button>
            </a>
          </div>
          
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-muted-foreground justify-center">
            <div className="flex items-center justify-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Satisfação Garantida</span>
            </div>
            <div className="flex items-center justify-center gap-2 col-span-2 lg:col-span-1">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Privacidade Protegida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
