import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

const SocialIcons = () => {
  const icons = [Facebook, Twitter, Github, Linkedin];

  return (
    <div className="flex justify-center gap-4 mt-2">
      {icons.map((Icon, i) => (
        <a
          key={i}
          href="#"
          className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:border-blue-500 transition"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
