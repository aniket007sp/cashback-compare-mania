import React, { useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight } from 'lucide-react';

const CategoryCarousel = ({ title, items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        emblaApi.plugins().autoplay.reset();
      });
    }
  }, [emblaApi]);

  return (
    <div className="my-8 relative px-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="link" className="text-blue-600 font-semibold">
          VIEW ALL <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <Carousel className="w-full">
        <CarouselContent ref={emblaRef}>
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4 pl-4">
              <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white h-full overflow-hidden">
                <CardContent className="p-6">
                  <img src={item.image} alt={item.name} className="w-16 h-8 object-contain mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <p className="text-lg font-semibold mb-2">{item.reward}</p>
                </CardContent>
                <CardFooter className="bg-white p-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    APPLY NOW
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={scrollPrev} className="absolute -left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext onClick={scrollNext} className="absolute -right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;