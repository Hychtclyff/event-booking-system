import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
const Ticket = () => {
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-green-600">
          Booking Status: Issued
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Booking Code:
          <span className="text-blue-500 font-medium">zqdo3BdE4</span>
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Image
            width={75}
            height={75}
            src="/img/qr-code.png"
            alt="QR Code"
            className="w-40 h-40"
          />
        </div>
        <div>
          <h3 className="font-semibold">Event Information</h3>
          <p className="text-sm">Desak Anies</p>
          <p className="text-sm"> December 25, 2024</p>
          <p className="text-sm">Lapangan Garuda</p>
        </div>
        <div>
          <h3 className="font-semibold">Attendee Information</h3>
          <p className="text-sm">Name: T. Taylor</p>
          <p className="text-sm">ID: 14587456985533214</p>
        </div>
        <div>
          <h3 className="font-semibold">Pricing Details</h3>
          <p className="text-sm"> IDR 2,950,000</p>

          <p className="text-sm">Discount: 3%</p>
          <p className="text-sm">Tax: 11%</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Ticket;
