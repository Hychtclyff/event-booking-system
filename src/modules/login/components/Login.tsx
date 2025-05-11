import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import SwitchButton from "./SwitchButton";

export const LoginPage = () => {
  return <Form />;
};

function Form() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="relative w-full max-w-4xl h-auto lg:h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
        {/* Panel kiri (desktop only) */}
        <motion.div
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex absolute top-0 left-0 w-1/2 h-full flex-col justify-center items-center px-8 text-white z-20"
          style={{ backgroundColor: "#6C63FF" }}
        >
          <h2 className="text-3xl font-bold mb-2">
            {isSignUp ? "Welcome Back!" : "Hello, Welcome!"}
          </h2>
          <p className="mb-6 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "Login" : "Register"}
          </button>
        </motion.div>

        {/* Kontainer Form */}
        <motion.div
          animate={{ x: isSignUp ? "-50%" : "0%" }}
          transition={{ duration: 0.7 }}
          className="hidden lg:grid absolute top-0 left-0 w-full h-full grid-cols-2"
        >
          <LoginForm />
          <RegisterForm />
        </motion.div>

        {/* Mobile layout (1 kolom) */}
        <div className="block lg:hidden p-6">
          <AnimatePresence mode="wait">
            {isSignUp ? (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <RegisterForm />
                <SwitchButton
                  text="Already have an account?"
                  actionText="Login"
                  onClick={() => setIsSignUp(false)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <LoginForm />
                <SwitchButton
                  text="Don't have an account?"
                  actionText="Register"
                  onClick={() => setIsSignUp(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}








export default LoginPage;
