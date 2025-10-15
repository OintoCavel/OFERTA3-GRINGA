import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Wind, TrendingUp, Flame, Repeat, type LucideIcon } from "lucide-react";

type Module = {
  title: string;
  icon: LucideIcon;
};

const modules: Module[] = [
  { title: "Anatomia do prazer real", icon: Target },
  { title: "Técnica da pressão e respiração", icon: Wind },
  { title: "Método da estimulação profunda", icon: TrendingUp },
  { title: "Como ativar a zona de gozo explosivo", icon: Flame },
  { title: "Pós-gozo: como manter ela viciada em você", icon: Repeat },
];

export function CourseSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white uppercase">
            O que você vai <span className="text-primary">receber</span>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <Card key={index} className="bg-card border-accent/30 text-center hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-accent/10 hover:shadow-primary/20">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/20 rounded-full">
                  <module.icon className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-white">{module.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
