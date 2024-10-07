import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const CategoryCarousel = ({ title, items }) => {
  return (
    <div className="my-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="link" className="text-blue-600 font-semibold">
          VIEW ALL <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <div className="relative px-12">
        <Carousel className="w-full">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="basis-1/4 pl-4">
                <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <img src={item.image} alt={item.name} className="w-16 h-8 object-contain mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    <p className="text-lg font-semibold">{item.reward}</p>
                  </CardContent>
                  <CardFooter className="bg-white p-4 mt-auto">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      APPLY NOW
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;