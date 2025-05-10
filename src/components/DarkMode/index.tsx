import Image from "next/image"; // Mengimpor komponen Image dari Next.js
import { useEffect, useState } from "react";
import { Toggle } from "../ui/toggle";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <Toggle
      onClick={handleDarkMode}
      // checked={darkMode}
      className="toggle-button rounded-full shadow-inner z-10 dark:bg-white bg-gray-300 hover:bg-gray-500 transition hover:shadow-lg cursor-pointer"
    >
      {darkMode ? (
        <Image width={10} height={10} src="/svg/Sun.svg" alt="Sun icon" />
      ) : (
        <Image width={10} height={10} src="/svg/Moon.svg" alt="Moon icon" />
      )}
    </Toggle>
  );
};

export default DarkMode;
