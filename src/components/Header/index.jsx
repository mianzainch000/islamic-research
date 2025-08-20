"use client";
import Link from "next/link";
import Image from "next/image";
import message from "@/message/ur.json";
import { setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import styles from "@/css/Header.module.css";
import { usePathname } from "next/navigation";
import routeTitleMap from "@/components/HeadertITitle";

const Header = ({ initialTheme }) => {
  const path = usePathname();
  const [theme, setTheme] = useState(initialTheme);
  const [screenName, setScreenName] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCookie("theme", newTheme, { maxAge: 60 * 60 * 24 * 365 });
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const cleanPath = path.replace(/^\/(ur|en)/, "");
    const translationKey = routeTitleMap[cleanPath];

    if (translationKey) {
      setScreenName(message.header[translationKey]);
    } else {
      setScreenName(
        message.header["notFound"] || "اللہ کی یاد ہی سے دلوں کو سُکون ملتا ہے"
      );
    }
  }, [path]);

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>

      <h1 className={styles.title}>📖 {screenName}</h1>

      <button className={styles.btn} onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
};

export default Header;
