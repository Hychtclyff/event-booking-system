import HeaderNotif from "./HeaderNotif";
import ListNotif from "./ListNotif";
import ToolsNotif from "./ToolsNotif";

const Notification = () => {
  return (
    <div className="flex flex-col gap-3">
      <HeaderNotif />
      <ToolsNotif />
      <ListNotif />
    </div>
  );
};

export default Notification;
