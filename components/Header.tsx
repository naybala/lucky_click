import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./common/ThemeToggle";
import { LanguageSwitcher } from "./common/LanguageSwitcher";
import { NavLinks } from "./common/NavLinks";

export default function Header() {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  const style: string = "px-3 py-1 border rounded";

  return (
    <>
      <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">MyLogo</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavLinks className="px-3 py-1" />
            <LanguageSwitcher className={style} />
            <ThemeToggle />
          </div>

          <button
            onClick={toggleSidebar}
            className="md:hidden px-2 py-1 border rounded"
          >
            ☰
          </button>
        </div>
      </header>
      <MobileNav isOpen={isOpen} closeSidebar={closeSidebar} />
    </>
  );
}
