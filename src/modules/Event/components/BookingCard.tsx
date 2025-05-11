import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

type BookingCardProps = {
  className?: string;
};

const BookingCard = ({ className }: BookingCardProps) => {
  return (
    <div className={cn("w-full flex flex-col gap-2", className)}>
      <div
        className={cn(
          "relative h-full rounded-2xl border p-4 shadow-md dark:shadow-none md:rounded-3xl bg-white dark:bg-zinc-900 max-h-18"
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
          <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Booking Now!</span>
          </button>
        </div>
      </div>

      <SocialIcons />
    </div>
  );
};

export default BookingCard;
