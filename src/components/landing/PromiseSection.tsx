import { XCircle } from "lucide-react";

const problems = [
  "Você se sente inseguro sobre sua performance na cama?",
  "Ela parece distante ou desinteressada durante o sexo?",
  "Acha que ela está fingindo para não te magoar?",
  "Sente que poderia proporcionar muito mais prazer, mas não sabe como?",
];

export function PromiseSection() {
  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
            Você acredita que faz bem, mas ela <span className="text-primary">finge o prazer</span> toda noite.
          </h2>
          <div className="mt-16 text-left max-w-2xl mx-auto">
            <ul className="space-y-6">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <XCircle className="h-7 w-7 text-red-500 flex-shrink-0" />
                  <span className="text-xl font-bold text-white">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
