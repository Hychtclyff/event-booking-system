import { CardSpotlight } from "@/components/ui/card-spotlight";
export const Footer = () => {
  return (
    <CardSpotlight className=" h-auto w-full border-0 rounded-none">
      <div className="container mx-auto px-10">
        <p className="text-2xl font-bold relative z-20 mt-2 text-white">
          Safe & Secure Ticketing
        </p>
        <div className="text-neutral-200 mt-4 relative z-20 text-sm">
          We are committed to ensuring your ticket buying experience is secure
          and seamless.
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Secure payment with encryption</li>
            <li>Instant email confirmation</li>
            <li>Easy ticket management in your dashboard</li>
            <li>Responsive 24/7 support</li>
          </ul>
        </div>
        <p className="text-neutral-400 mt-4 relative z-20 text-xs">
          &copy; {new Date().getFullYear()} Eventify. All rights reserved. |
          <a href="/terms" className="underline ml-1">
            Terms
          </a>
          <a href="/privacy" className="underline ml-1">
            Privacy
          </a>
        </p>
      </div>
    </CardSpotlight>
  );
};
