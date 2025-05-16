import CategoriesHistory from "./CategoriesHistory";
import HeaderHistory from "./HeaderHistory";
import ListHistory from "./ListHistory";
import Ticket from "./Ticket";

const History = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-8 flex flex-col gap-3">
        <HeaderHistory />
        <CategoriesHistory />
        <ListHistory />
      </div>
      <div className="col-span-4">
        <Ticket />
      </div>
    </div>
  );
};

export default History;
