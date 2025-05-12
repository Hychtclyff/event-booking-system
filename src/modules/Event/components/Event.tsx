import { useRouter } from "next/navigation";
import Banner from "./Banner";
import BookingCard from "./BookingCard";
import DescEvent from "./DescEvent";
import TimeTableCard from "./TimeTableCard";
import { ArrowLeft } from "lucide-react";

const EventDetail = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto px-10 grid grid-cols-7 gap-3 ">
      {/* Tombol Back */}
      <button
        onClick={() => router.back()}
        className=" absolute top-4 left-4 z-50 flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </button>
      <Banner className="col-span-5" />
      <TimeTableCard
        className="col-span-2"
        title="2025 BTOB FAN-CON 3 2 1 GO! MELympic in JAKARTA"
        date="07 Jun 2025"
        time="19:00 WIB"
        location="The Kasablanka Hall, DKI Jakarta"
        organizer="PT. FRIEDRICE ENTERTAINMENT INDONESIA"
        organizerLogo="/img/friedrice.png" // Ganti dengan path logo sesuai project kamu
      />
      <div className="col-span-5">
        <DescEvent />
      </div>
      <BookingCard className="col-span-2 " />
    </div>
  );
};

export default EventDetail;
