import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const CategoriesHistory = () => {
  return (
    <div className="categories  flex justify-between ">
      <div className="flex  justify-start  flex-wrap  text-center gap-2">
        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>All</span>
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Issued</span>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Cancel</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default CategoriesHistory;
