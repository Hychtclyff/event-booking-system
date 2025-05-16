import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BookingSuccessPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen   transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full p-6 rounded-2xl text-center space-y-4  shadow-md transition-colors"
      >
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="flex justify-center"
        >
          <svg
            className="w-24 h-24 text-green-500 dark:text-green-400"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-300 dark:text-green-500"
            />
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M14 27l7 7 16-16"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-green-500 dark:text-green-400"
            />
          </svg>
        </motion.div>

        {/* Title & subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 transition-colors">
            Booking Successful!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            Thank you! Your reservation has been successfully completed. Please
            check your email for further details.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-3"
        >
          <Button
            onClick={() => router.push("/")}
            className="w-full"
            variant="default"
          >
            Back to Home
          </Button>
          <Button
            onClick={() => router.push("/history")}
            className="w-full"
            variant="default"
          >
            View History
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingSuccessPage;
