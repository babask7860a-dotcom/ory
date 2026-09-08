import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselWithFooter() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full relative group">
      <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/banners/1.png"
              alt="Image 1"
              className="w-full h-auto object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banners/2.png"
              alt="Image 2"
              className="w-full h-auto object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banners/3.png"
              alt="Image 3"
              className="w-full h-auto object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banners/4.png"
              alt="Image 4"
              className="w-full h-auto object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            className={cn(
              "h-2 w-2 rounded-full transition-all bg-white/50 hover:bg-white",
              {
                "bg-white w-6": current === index + 1,
              },
            )}
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
