import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Adds = () => {
  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="relative flex items-center justify-center px-10 h-[12rem]">
        <Image
          src="/img/1711433074_WACB8D.jpg"
          alt="banner-1"
          fill
          className=" w-full h-full "
        />
      </CardContent>
    </Card>
  );
};
export default Adds;
