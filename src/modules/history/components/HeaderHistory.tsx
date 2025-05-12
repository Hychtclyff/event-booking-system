import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const HeaderHistory = () => {
  return (
    <>
      <Card className="p-2">
        <CardContent className="p-10 flex gap-5 flex-col">
          <CardTitle>History Booking</CardTitle>
          <Button
            className="w-full text-start flex  justify-start"
            variant="default"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default HeaderHistory;
