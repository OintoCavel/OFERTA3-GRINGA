import { XCircle } from "lucide-react";

const problems = [
  "85% das mulheres fingem orgasmo",
  "A maioria dos homens não sabe estimular o ponto certo",
  "Sem técnica, você vira mais do mesmo",
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
            Você acredita que faz bem, mas{" "}
            <span className="text-primary">ela finge o prazer</span> toda noite.
          </h2>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start space-x-4">
                <XCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground font-bold">{problem}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-20 border-l-4 border-primary pl-6 italic">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              “Quando ela goza DE VERDADE, ela vira outra mulher.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
