import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Categories = () => {
  return (
    <div className="categories pt-10 flex justify-between ">
      <div className="flex  justify-start  flex-wrap  text-center gap-2">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Music</span>
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Seminar</span>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Show </span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Categories;
