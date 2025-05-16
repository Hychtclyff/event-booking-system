import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
import { eventsMusic } from "@/common/constants/eventsMusic";
import MusicEventCard from "./MusicEventCard";

const EventMusic = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {eventsMusic.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <MusicEventCard
                key={index}
                title={event.title}
                date={event.date}
                price={event.price}
                image={{
                  src: event.image.src,
                  alt: event.image.alt,
                }}
                organizer={event.organizer}
                href="/event/festival-musik-laut" // Bisa juga event.href kalau tiap event berbeda
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default EventMusic;
