import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function ConfirmationCard() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-md rounded-2xl shadow-md p-4">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold">Konfirmasi</h2>
        <p className="text-sm text-gray-500">
          Harap baca dan setujui Syarat dan Ketentuan serta Pemrosesan Data
          Pribadi berikut untuk melanjutkan.
        </p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
              Saya setuju dengan Syarat dan Ketentuan yang berlaku di Eventify *
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="dataProcessing" />
            <Label htmlFor="dataProcessing">
              Saya setuju dengan Pemrosesan Data Pribadi yang berlaku di
              Eventify *
            </Label>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={() => router.push("/booking/slug/succeed")} className="w-full z-10">
          Booking
        </Button>
      </CardFooter>
    </Card>
  );
}
