import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const HeaderNotif = () => {
  const router = useRouter();
  return (
    <Card className="p-2">
      <CardContent className="p-10 flex gap-5 flex-col">
        <CardTitle>Notification</CardTitle>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => router.back()}
            className="w-3/4 text-start flex justify-start"
            variant="default"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-9" // adds padding-left so text doesn't overlap with icon
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeaderNotif;
