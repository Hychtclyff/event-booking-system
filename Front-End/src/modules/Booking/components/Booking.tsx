import BookingForm from "./BookingForm";
import ConfirmationCard from "./ConfirmCard";
import OrderDetail from "./OrderDetails";

const Booking = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-8 flex flex-col gap-3">
        <OrderDetail />
        <BookingForm />
      </div>
      <div className="col-span-4">
        <ConfirmationCard />
      </div>
    </div>
  );
};

export default Booking;
