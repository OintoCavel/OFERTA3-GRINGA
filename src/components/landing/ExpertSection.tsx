import Image from "next/image";
import { CheckCircle2, Star, Trophy, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";

const credentials = [
  "Sexólogo e Terapeuta Comportamental",
  "Certificado em Terapias de Casais e Disfunções Sexuais",
  "Especialista em Massagens Eróticas",
  "Criador do método Liberação de Esquichos"
];

const achievements = [
    { icon: Trophy, text: "Número 1 no mercado da sexualidade" },
    { icon: Users, text: "Mais de 35.000 pacientes atendidos" },
];

export function ExpertSection() {
  const expertImage = PlaceHolderImages.find(
    (img) => img.id === "expert-photo"
  );

  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card border-primary/20 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              {expertImage && (
                <Image
                  src={expertImage.imageUrl}
                  alt={expertImage.description}
                  width={300}
                  height={300}
                  className="rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/30"
                  data-ai-hint={expertImage.imageHint}
                />
              )}
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider">Apresentamos seu professor</h3>
              <h2 className="text-4xl lg:text-5xl font-black text-white mt-2">
                Ramon Pereira
              </h2>
              <ul className="mt-6 space-y-3">
                {credentials.map((cred, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground font-semibold">{cred}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((ach, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-md">
                            <ach.icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-bold text-white">{ach.text}</p>
                    </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
