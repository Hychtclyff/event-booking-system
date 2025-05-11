import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import EventCard from "./EventCard";
import { EventsData } from "@/common/constants/EventsData";

const Events = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {EventsData.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <EventCard key={index} {...event} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
export default Events;
