"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type EventCardProps = {
  title: string;
  date: string;
  price: number;
  image: {
    src: string;
    alt: string;
  };
  organizer: string;
  href?: string; // opsional kalau mau dibungkus <a>
};

const MusicEventCard = ({
  title,
  date,
  price,
  image,
  organizer,
  href,
}: EventCardProps) => {
  const cardContent = (
    <>
      <CardContent className="p-0 overflow-hidden">
        <div className="relative w-full h-52">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
          <h5 className="mt-2 text-md font-medium text-color2">
            Rp {price.toLocaleString("id-ID")}
          </h5>
        </div>
      </CardContent>
      <CardFooter className="pt-0 border-t border-gray-300 text-sm text-gray-700">
        {organizer}
      </CardFooter>
    </>
  );

  return (
    <Card className="h-full pt-0 overflow-hidden hover:shadow-lg transition">
      {href ? <a href={href}>{cardContent}</a> : cardContent}
    </Card>
  );
};

export default MusicEventCard;
