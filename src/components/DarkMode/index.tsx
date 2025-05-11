"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toggle } from "../ui/toggle";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode") === "true";
    setDarkMode(stored);
    setHasMounted(true);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode, hasMounted]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Toggle
      onClick={handleDarkMode}
      className="toggle-button rounded-full shadow-inner z-10 dark:bg-white bg-gray-300 hover:bg-gray-500 transition hover:shadow-lg cursor-pointer"
    >
      {hasMounted && darkMode ? (
        <Image width={16} height={16} src="/svg/Sun.svg" alt="Sun icon" />
      ) : (
        <Image width={16} height={16} src="/svg/Moon.svg" alt="Moon icon" />
      )}
    </Toggle>
  );
};

export default DarkMode;
