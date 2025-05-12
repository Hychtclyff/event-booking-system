import EventCard from "./EventCard";
import { EventsData } from "@/common/constants/EventsData";

const ListEvents = () => {
  return (
    <>
      <div className="listProducts grid grid-col-1 md:grid-cols-3 xl:grid-cols-3 gap-7 p-5 overflow-auto ">
        {EventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default ListEvents;
