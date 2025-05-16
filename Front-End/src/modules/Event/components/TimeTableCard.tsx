import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

type TimeTableCardProps = {
  title: string;
  date: string;
  time?: string;
  location: string;
  organizer: string;
  organizerLogo: string;
  className?: string;
};

const TimeTableCard = ({
  title,
  date,
  time,
  location,
  organizer,
  organizerLogo,
  className,
}: TimeTableCardProps) => {
  return (
    <div
      className={cn(
        "relative h-full rounded-2xl border p-4 shadow-md dark:shadow-none md:rounded-3xl bg-white dark:bg-zinc-900",
        className
      )}
    >
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex flex-col h-full justify-between gap-6 ">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <CalendarIcon className="w-4 h-4" />
            <span>{date}</span>
          </div>

          {time && (
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <ClockIcon className="w-4 h-4" />
              <span>{time}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <MapPinIcon className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="border-t pt-4 mt-4 text-sm">
          <div className="flex items-center gap-3">
            <Image
              src={organizerLogo}
              alt="Organizer Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <p className="text-muted-foreground">Diselenggarakan oleh</p>
              <p className="font-bold uppercase text-black dark:text-white">
                {organizer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTableCard;
