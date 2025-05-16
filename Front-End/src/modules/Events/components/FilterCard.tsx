import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function FilterCard() {
  return (
    <Card className="w-full max-w-md rounded-2xl shadow-md p-4">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold">Filter</h2>
        <Accordion type="multiple" className="w-full space-y-2">
          <AccordionItem value="kategori">
            <AccordionTrigger>Kategori</AccordionTrigger>
            <AccordionContent>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seminar">Seminar</SelectItem>
                  <SelectItem value="pelatihan">Pelatihan</SelectItem>
                  <SelectItem value="kompetisi">Kompetisi</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="waktu">
            <AccordionTrigger>Waktu</AccordionTrigger>
            <AccordionContent>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih waktu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pagi">Pagi</SelectItem>
                  <SelectItem value="siang">Siang</SelectItem>
                  <SelectItem value="malam">Malam</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="lokasi">
            <AccordionTrigger>Lokasi</AccordionTrigger>
            <AccordionContent>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih lokasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jakarta">Jakarta</SelectItem>
                  <SelectItem value="bandung">Bandung</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tipe">
            <AccordionTrigger>Jenis (Online / Offline)</AccordionTrigger>
            <AccordionContent>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih jenis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
