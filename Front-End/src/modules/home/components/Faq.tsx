import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Faq = () => {
  return (
    <>
      <BackgroundBeamsWithCollision className="flex flex-col md:flex-row">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl relative z-20 md:text-4xl lg:text-6xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
        >
          Your Ticket Questions
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Blown Wide Open!</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span>Blown Wide Open!</span>
            </div>
          </div>
        </motion.h2>
        <Accordion type="single" collapsible className="w-full px-10">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I buy a ticket?</AccordionTrigger>
            <AccordionContent>
              You can purchase tickets by visiting our official website,
              selecting your desired event, choosing your seat, and completing
              payment via our secure checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I request a refund?</AccordionTrigger>
            <AccordionContent>
              Refunds can be requested within 24 hours of purchase by contacting
              our support team. Terms and conditions apply, and not all tickets
              may be refundable.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I transfer my ticket to someone else?
            </AccordionTrigger>
            <AccordionContent>
              Yes, tickets are transferable. You can update the ticket holder’s
              name from your account dashboard before the event starts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default Faq;
