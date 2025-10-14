import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Aprenda como identificar e estimular o ponto exato da liberação",
  "Técnicas de toques, ritmo e controle da mente feminina",
  "Estímulos profundos para múltiplos orgasmos e jatos intensos",
  "Torne-se o melhor que ela já teve (e vai lembrar pra sempre)",
];

export function PromiseSection() {
  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
            Liberte o <span className="text-primary">maior prazer</span> que existe dentro dela com um método validado, direto ao ponto, sem enrolação.
          </h2>
          <div className="mt-16 text-left max-w-2xl mx-auto">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0" />
                  <span className="text-xl font-bold text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
