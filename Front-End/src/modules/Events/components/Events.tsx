import Categories from "./Categories";
import FilterCard from "./FilterCard";
import ListEvents from "./ListEvents";
import Tools from "./Tools";

const Events = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-12">
        <Tools />
      </div>
      <div className="md:col-span-3">
        <FilterCard />
      </div>
      <div className="md:col-span-9 space-y-4">
        <Categories />
        <ListEvents />
      </div>
    </div>
  );
};

export default Events;
