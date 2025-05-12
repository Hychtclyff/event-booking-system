import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Trash2, CheckCheck } from "lucide-react";

const ToolsNotif = () => {
  return (
    <div className=" flex justify-between">
      <div className="flex justify-start flex-wrap text-center gap-2">
        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-3 py-2"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-3 py-2"
        >
          <CheckCheck className="w-4 h-4" />
          <span>Mark All As Read</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default ToolsNotif;
