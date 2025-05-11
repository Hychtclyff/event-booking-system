import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const LazyLoad = () => {
  const slides = [
    { src: "/img/1710747974_EsrPUP.jpg", alt: "banner-1" },
    { src: "/img/1710821381_3gvZ60.jpg", alt: "banner-2" },
    { src: "/img/1711433074_WACB8D.jpg", alt: "banner-3" },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="p-0 overflow-hidden">
              <CardContent className="relative flex items-center justify-center h-[25rem]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className=" w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LazyLoad;
