import Adds from "./Add";
import Agendas from "./Agendas";
import Events from "./Events";
import EventMusic from "./EventsMusic";
import Faq from "./Faq";
import LazyLoad from "./LazyLoad";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <LazyLoad />
      <Agendas title="Event Music">
        <EventMusic />
      </Agendas>
      <Adds />
      <Agendas title="Events">
        <Events />
      </Agendas>
      <Faq />
    </div>
  );
};
export default Home;
