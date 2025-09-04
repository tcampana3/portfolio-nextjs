"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const LinkItem = ({ href, children }) => (
  <Link
    href={href}
    className="px-3 py-2 rounded-lg text-sm text-blue-600 dark:text-blue-400 hover:underline transition"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : false; // default LIGHT now
    setDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--bg)] border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-wide text-blue-600 dark:text-blue-400 hover:underline"
        >
          Anthony Campana
        </Link>
        <div className="flex items-center gap-2">
          <LinkItem href="/">About</LinkItem>
          <LinkItem href="/projects">Projects</LinkItem>
          <LinkItem href="/experience">Work Experience</LinkItem>
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 rounded-md border text-sm"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
            title="Toggle theme"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
