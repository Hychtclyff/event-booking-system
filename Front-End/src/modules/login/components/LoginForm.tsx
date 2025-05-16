import { Lock, User } from "lucide-react";
import Input from "./Input";
import SocialIcons from "./SocialIcons";

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 px-4 lg:px-10 py-6 z-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Login
      </h2>
      <Input icon={<User />} type="text" placeholder="Username" />
      <Input icon={<Lock />} type="password" placeholder="Password" />
      <a
        href="#"
        className="text-sm text-gray-500 dark:text-gray-400 mb-4 self-end"
      >
        Forgot password?
      </a>
      <button className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition">
        Login
      </button>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        or login with
      </p>
      <SocialIcons />
    </div>
  );
};

export default LoginForm;
