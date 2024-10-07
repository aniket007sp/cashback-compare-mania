import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const CategoryCarousel = ({ title, items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [parent] = useAutoAnimate();

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Carousel className="relative">
        <CarouselContent ref={emblaRef}>
          {items.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 pl-4">
              <div className="mr-4" ref={parent}>
                <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white h-full">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-2">
                          {item.badge}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-2">{item.description}</p>
                    <ul className="list-disc list-inside">
                      {item.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                      {item.ctaText}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;