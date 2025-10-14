import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Identificar e estimular o ponto exato para orgasmos intensos",
  "Técnicas de toques, ritmo e controle da mente feminina",
  "Como proporcionar múltiplos orgasmos e jatos de prazer",
  "Tornar-se inesquecível e o melhor parceiro que ela já teve",
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
            Domine as técnicas para dar um <span className="text-primary">prazer inesquecível</span> a qualquer mulher
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Com o nosso método, você vai aprender exatamente o que fazer.</p>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-white font-bold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
