import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Gift, Heart, Repeat, Target, TrendingUp, Video, Wind, Zap, Lock, Smartphone, Clapperboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  title: string;
  icon: LucideIcon;
  description: string;
};

const deliveries: Item[] = [
  {
    title: "+40 Aulas com Vídeos Explícitos",
    icon: Clapperboard,
    description: "Aprenda na prática com demonstrações detalhadas e sem censura."
  },
  { 
    title: "Acesso Vitalício ao Curso", 
    icon: Lock,
    description: "Pague uma vez e acesse o conteúdo para sempre, incluindo todas as futuras atualizações."
  },
  { 
    title: "Acesso em Qualquer Dispositivo", 
    icon: Smartphone,
    description: "Assista às aulas no seu celular, tablet ou computador, a qualquer hora e em qualquer lugar."
  },
  { 
    title: "Guia de Posições (E-book)", 
    icon: BookOpen,
    description: "Um guia com as melhores posições para levar o prazer dela a um novo nível."
  },
];

const bonuses: Item[] = [
    {
        title: "Bônus 1: Guia de Posições",
        icon: BookOpen,
        description: "Um e-book com as melhores posições para maximizar o prazer dela."
    },
    {
        title: "Bônus 2: Aulas em vídeo",
        icon: Video,
        description: "Demonstrações explícitas para você ver e aprender na prática."
    },
    {
        title: "Bônus 3: Comunidade Secreta",
        icon: Heart,
        description: "Acesso a um grupo exclusivo para tirar dúvidas e trocar experiências."
    }
]

export function CourseSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white uppercase">
            O que você vai <span className="text-primary">receber</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um arsenal completo para se tornar o melhor sexo da vida dela.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {deliveries.map((item, index) => (
            <Card key={index} className="bg-card border-accent/30 text-center hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-accent/10 hover:shadow-primary/20 flex flex-col">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/20 rounded-full">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-white pt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center mt-24">
            <h3 className="text-3xl lg:text-5xl font-black text-white uppercase">
                E ainda <span className="text-primary">3 bônus</span> exclusivos
            </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-primary/10 border-primary/30 text-center hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-primary/20 flex flex-col">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/20 rounded-full">
                  <bonus.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-white pt-2">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/80">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
