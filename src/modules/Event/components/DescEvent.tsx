import { dummyContent } from "@/common/constants/DumyContents";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
type DescEventProps = {
  className?: string;
};
const DescEvent = ({ className }: DescEventProps) => {
  return (
    <>
      <TracingBeam className="px-6">
        <div
          className={cn(
            `max-w-2xl mx-auto antialiased pt-4 relative `,
            className
          )}
        >
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
};

export default DescEvent;
