import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { MobileNavProps } from "../types/MobileNavProps";
import ThemeToggle from "./common/ThemeToggle";

export default function MobileNav({ isOpen, closeSidebar }: MobileNavProps) {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const { t } = useTranslation("common");
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 space-y-4">
          <div className="text-xl font-bold">
            <Link href="/" onClick={closeSidebar}>
              MyLogo
            </Link>
          </div>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Menu Items */}
          <Link href="/" onClick={closeSidebar}>
            <button className="w-full text-left px-3 py-2">{t("home")}</button>
          </Link>
          <Link href="/" onClick={closeSidebar}>
            <button className="w-full text-left px-3 py-2">{t("home1")}</button>
          </Link>
          <Link href="/" onClick={closeSidebar}>
            <button className="w-full text-left px-3 py-2">{t("home2")}</button>
          </Link>
          <Link href="/" onClick={closeSidebar}>
            <button className="w-full text-left px-3 py-2">{t("home3")}</button>
          </Link>

          {/* Language Buttons */}
          {locale === "mm" ? (
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale="en"
              onClick={closeSidebar}
            >
              <button className="w-full text-left px-3 py-2 border rounded">
                {t("english")}
              </button>
            </Link>
          ) : (
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale="mm"
              onClick={closeSidebar}
            >
              <button
                className="w-full text-left px-3 py-2 border rounded"
                disabled={locale === "mm"}
              >
                {t("myanmar")}
              </button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
