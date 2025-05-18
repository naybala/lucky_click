import Link from "next/link";
import { useTranslation } from "next-i18next";
import { NavLinksProps } from "../../types/MobileNavProps";

export const NavLinks = ({ className = "", onClick }: NavLinksProps) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Link href="/" onClick={onClick}>
        <button className={className}>{t("home")}</button>
      </Link>
      <Link href="/tutorial" onClick={onClick}>
        <button className={className}>{t("tutorial")}</button>
      </Link>
      <Link href="/about" onClick={onClick}>
        <button className={className}>{t("about")}</button>
      </Link>
    </>
  );
};
