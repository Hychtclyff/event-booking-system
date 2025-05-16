import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
const BookingForm = () => {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Booking Details</CardTitle>
      </CardHeader>

      <CardContent>
        <Accordion type="single" collapsible defaultValue="ticket-1">
          <AccordionItem value="ticket-1" className="border rounded-md">
            <AccordionTrigger className="px-4 py-2 bg-muted font-semibold text-sm">
              Ticket 1: Celerates Public Training - Project Management
            </AccordionTrigger>

            <AccordionContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-blue-600">
                <Info className="w-4 h-4" />
                <span>Transaction recipient information</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-muted-foreground">
                  Use the name as shown on your ID or passport.
                </p>
                <Input id="fullName" placeholder="Full Name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-muted-foreground">
                  E-ticket will be sent to this email address.
                </p>
                <Input id="email" type="email" placeholder="Email Address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input id="phone" type="tel" placeholder="e.g., 08xxxxxxxxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <select
                  id="gender"
                  className="w-full border border-input bg-background rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input id="dob" type="date" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
