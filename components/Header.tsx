import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./common/ThemeToggle";
import { LanguageSwitcher } from "./common/LanguageSwitcher";
import { NavLinks } from "./common/NavLinks";
import Logo from "./../public/images/lucky_click.png";

export default function Header() {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  const style: string = "px-3 py-1 border rounded";

  return (
    <>
      <header className="bg-[#ece7e7f6] dark:bg-[#0f1114f5] text-black dark:text-white shadow p-4 fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center">
              <img
                src={Logo.src}
                alt="Lucky Click Logo"
                className="h-12 w-12 mr-2 rounded-sm shadow-lg"
              />
              {t("app-name")}
            </Link>
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
