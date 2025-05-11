"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toggle } from "../ui/toggle";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // Default awal tanpa akses localStorage
  const [isClient, setIsClient] = useState(false); // Untuk render icon setelah client-side mount

  useEffect(() => {
    // Jalankan setelah client-side mount
    const stored = localStorage.getItem("darkMode") === "true";
    setDarkMode(stored);
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Hindari error sebelum client ready

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode, isClient]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Toggle
      onClick={handleDarkMode}
      className="toggle-button rounded-full shadow-inner z-10 dark:bg-white bg-gray-300 hover:bg-gray-500 transition hover:shadow-lg cursor-pointer"
    >
      {isClient && darkMode ? (
        <Image width={16} height={16} src="/svg/Sun.svg" alt="Sun icon" />
      ) : (
        <Image width={16} height={16} src="/svg/Moon.svg" alt="Moon icon" />
      )}
    </Toggle>
  );
};

export default DarkMode;
