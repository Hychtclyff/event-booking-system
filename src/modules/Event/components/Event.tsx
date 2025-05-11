import Banner from "./Banner";
import BookingCard from "./BookingCard";
import DescEvent from "./DescEvent";
import TimeTableCard from "./TimeTableCard";

const EventDetail = () => {
  return (
    <div className="container mx-auto px-10 grid grid-cols-7 gap-3 ">
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
