import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./common/ThemeToggle";

export default function Header() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">MyLogo</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/">
              <button className="px-3 py-1">{t("home")}</button>
            </Link>
            <Link href="/">
              <button className="px-3 py-1">{t("home1")}</button>
            </Link>
            <Link href="/">
              <button className="px-3 py-1">{t("home2")}</button>
            </Link>
            <Link href="/">
              <button className="px-3 py-1">{t("home3")}</button>
            </Link>

            {locale === "mm" ? (
              <Link href={{ pathname, query }} as={asPath} locale="en">
                <button className="px-3 py-1 border rounded">
                  {t("english")}
                </button>
              </Link>
            ) : (
              <Link href={{ pathname, query }} as={asPath} locale="mm">
                <button
                  className="px-3 py-1 border rounded"
                  disabled={locale === "mm"}
                >
                  {t("myanmar")}
                </button>
              </Link>
            )}
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
