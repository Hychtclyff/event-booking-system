import { Lock, Mail, User } from "lucide-react";
import Input from "./Input";
import SocialIcons from "./SocialIcons";

const RegisterForm = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 px-4 lg:px-10 py-6 z-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Register
      </h2>
      <Input icon={<User />} type="text" placeholder="Username" />
      <Input icon={<Mail />} type="email" placeholder="Email" />
      <Input icon={<Lock />} type="password" placeholder="Password" />
      <button className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition">
        Register
      </button>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        or sign up with
      </p>
      <SocialIcons />
    </div>
  );
};

export default RegisterForm;
