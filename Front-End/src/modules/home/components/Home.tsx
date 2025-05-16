import Adds from "./Add";
import Agendas from "./Agendas";
import Events from "./Events";
import EventMusic from "./EventsMusic";
import Faq from "./Faq";
import LazyLoad from "./LazyLoad";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="flex flex-col gap-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <LazyLoad />
      <Agendas title="Event Music">
        <EventMusic />
      </Agendas>
      <Adds />
      <Agendas title="Events">
        <Events />
      </Agendas>
      <Faq />
    </motion.div>
  );
};
export default Home;
