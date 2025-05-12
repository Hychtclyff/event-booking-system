import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

const ListNotif = () => {
  return (
    <>
      <Card className="border-l-4 border-green-500 bg-green-50 dark:bg-green-100/10">
        <CardContent className="flex items-start gap-4 p-4">
          <CheckCircle className="text-green-600 mt-1" size={24} />
          <div>
            <p className="font-semibold text-green-700">Booking Successful</p>
            <p className="text-sm text-muted-foreground">
              Your event booking with reference number{" "}
              <span className="font-medium">BOOKING-290-1734971248226</span> has
              been successfully confirmed. Thank you for your payment. We look
              forward to seeing you at the event!
            </p>
            <p className="text-xs text-right text-gray-500 mt-2">
              December 23, 2024, 23:27 PM
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ListNotif;
