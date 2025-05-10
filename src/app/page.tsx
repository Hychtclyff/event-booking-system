"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <LazyLoad />
      <Event />
    </div>
  );
}
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

const Event = () => {
  const events = [
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-4" },
    {
      src: "/tiketshop.io/img/20240324100854_65ff99465d799.jpg",
      alt: "event-5",
    },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-4" },
    { src: "/tiketshop.io/img/20240205125720.jpg", alt: "event-5" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-4" },
    {
      src: "/tiketshop.io/img/20240324100854_65ff99465d799.jpg",
      alt: "event-5",
    },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-4" },
    {
      src: "/tiketshop.io/img/20240324100854_65ff99465d799.jpg",
      alt: "event-5",
    },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/img/event1.jpg", alt: "event-4" },
    {
      src: "/tiketshop.io/img/20240324100854_65ff99465d799.jpg",
      alt: "event-5",
    },
  ];

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="p-0">
                    <a
                      className="block cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white"
                      href="/tiketshop.io/event"
                    >
                      {/* Gambar: bungkus dalam relative container */}
                      <div className="relative w-full h-60">
                        {" "}
                        {/* tinggi tetap, bisa disesuaikan */}
                        <Image
                          src={event.src}
                          alt={event.alt}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-semibold">Judul</h3>
                        <p className="text-sm text-gray-500">Tanggal Event</p>
                        <h5 className="mt-2 text-md font-medium text-color2">
                          Rp 100.000
                        </h5>
                      </div>

                      <footer className="p-3 bg-slate-100/50 border-t border-gray-300 text-sm text-gray-700">
                        Penyelenggara Event
                      </footer>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
