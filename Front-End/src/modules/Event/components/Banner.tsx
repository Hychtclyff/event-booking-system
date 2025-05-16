import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { FC } from "react";

type BannerProps = {
  className?: string;
};

const Banner: FC<BannerProps> = ({ className }) => {
  return (
    <Card className={cn("p-0 overflow-hidden", className)}>
      <CardContent className="relative flex items-center justify-center h-[25rem]">
        <Image
          src="/img/diskusi.jpg"
          alt="diskusi"
          fill
          className="w-full h-full object-cover"
        />
      </CardContent>
    </Card>
  );
};

export default Banner;
