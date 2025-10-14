import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PromiseSection() {
  const devicesImage = PlaceHolderImages.find(p => p.id === "devices-mockup");

  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
              Você consegue acessar em qualquer <span className="text-primary">aparelho</span> e quando <span className="text-primary">quiser</span>
            </h2>
          </div>
          <div className="flex justify-center">
            {devicesImage && (
                <Image
                  src={devicesImage.imageUrl}
                  alt={devicesImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl shadow-primary/20 object-cover"
                  data-ai-hint={devicesImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
