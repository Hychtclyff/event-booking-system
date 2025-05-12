import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import Image from "next/image";

const OrderDetail = () => {
  return (
    <>
      <Card className="rounded-xl shadow-sm ">
        <CardHeader className="flex flex-row space-x- items-start">
          <div className="w-2/5">
            <Image
              src="/img/diskusi.jpg" // Ganti dengan path gambarmu
              alt="Banner"
              width={150}
              height={90}
              className="rounded-md object-cover w-80 h-auto"
            />
          </div>
          <div className="w-3/5 space-y-2">
            <h3 className="text-lg font-semibold leading-tight">
              Celerates Public Training: The Strategic ...
            </h3>
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <CalendarDays className="w-4 h-4" />
              <span>23 Apr 2025 – 14 May 2025</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <Clock className="w-4 h-4" />
              <span>19:00 – 22:00 WIB</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Celerates Indonesia, DKI Jakarta</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="border-t pt-4">
            <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
              <span>Jenis Tiket</span>
              <div className="flex gap-16">
                <span>Harga</span>
                <span>Jumlah</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <Ticket className="w-5 h-5 text-blue-500" />
                <span className="text-sm truncate max-w-[180px]">
                  Celerates Public Training - Project Manage...
                </span>
              </div>
              <div className="flex items-center gap-16 text-sm">
                <span className="whitespace-nowrap">Rp350.000</span>
                <span className="whitespace-nowrap">x1</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderDetail;
