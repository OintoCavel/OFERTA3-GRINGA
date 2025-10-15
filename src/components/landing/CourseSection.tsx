import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Gift, Heart, Repeat, Target, TrendingUp, Video, Wind, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  title: string;
  icon: LucideIcon;
  description: string;
};

const modules: Item[] = [
  { 
    title: "Módulo 1: Anatomia do Prazer", 
    icon: Target,
    description: "Mapeie os pontos de prazer da mulher e entenda como estimulá-los."
  },
  { 
    title: "Módulo 2: Técnicas de Toque", 
    icon: Wind,
    description: "Aprenda a usar as mãos e a boca para levar ela à loucura."
  },
  { 
    title: "Módulo 3: Orgasmos Múltiplos", 
    icon: TrendingUp,
    description: "Domine a arte de proporcionar orgasmos em sequência."
  },
  { 
    title: "Módulo 4: Squirt e Liberação", 
    icon: Zap,
    description: "Como ativar a zona de gozo explosivo e liberar jatos de prazer."
  },
  { 
    title: "Módulo 5: Conexão e Vício", 
    icon: Repeat,
    description: "Pós-gozo: crie uma conexão profunda e mantenha ela viciada em você."
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <Card key={index} className="bg-card border-accent/30 text-center hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-accent/10 hover:shadow-primary/20 flex flex-col">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/20 rounded-full">
                  <module.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-white pt-2">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{module.description}</p>
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