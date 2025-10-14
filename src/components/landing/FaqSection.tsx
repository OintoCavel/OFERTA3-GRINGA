import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O curso é para iniciantes?",
    answer: "Sim! O método foi desenhado para qualquer homem, independente do seu nível de experiência. Ensinamos desde a anatomia básica do prazer até as técnicas mais avançadas, passo a passo.",
  },
  {
    question: "Terei acesso para sempre?",
    answer: "Sim! Comprando hoje, você garante acesso vitalício a todo o material do curso e a todas as futuras atualizações, sem nenhum custo adicional.",
  },
  {
    question: "Como receberei o acesso?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a nossa área de membros exclusiva.",
  },
  {
    question: "É seguro comprar?",
    answer: "Completamente seguro. Nossa plataforma de pagamento é uma das maiores e mais seguras do mundo, utilizando criptografia de ponta para proteger todos os seus dados.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-center text-white">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-accent/30">
                <AccordionTrigger className="text-left text-xl font-bold text-white hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
