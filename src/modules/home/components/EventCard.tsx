"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type SeminarEventCardProps = {
  title: string;
  description: string;
  category?: string; // bisa jadi "Pameran", "Diskusi", dsb
  image: {
    src: string;
    alt: string;
  };
  href?: string;
};

const EventCard = ({
  title,
  description,
  category,
  image,
  href,
}: SeminarEventCardProps) => {
  const content = (
    <>
      <CardContent className="p-0 overflow-hidden">
        <div className="relative w-full h-72">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </CardContent>
      {category && (
        <CardFooter className="pt-0 px-4 pb-4 text-sm text-blue-600 font-medium">
          {category}
        </CardFooter>
      )}
    </>
  );

  return (
    <Card className="h-full overflow-hidden hover:shadow-xl transition rounded-xl">
      {href ? <a href={href}>{content}</a> : content}
    </Card>
  );
};

export default EventCard;
