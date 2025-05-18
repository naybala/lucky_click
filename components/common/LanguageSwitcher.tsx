import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { LanguageSwitcherProps } from "../../types/MobileNavProps";

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { locale, pathname, query, asPath } = router;

  return (
    <>
      {locale === "mm" ? (
        <Link href={{ pathname, query }} as={asPath} locale="en">
          <button className={className}>{t("english")}</button>
        </Link>
      ) : (
        <Link href={{ pathname, query }} as={asPath} locale="mm">
          <button className={className} disabled={locale === "mm"}>
            {t("myanmar")}
          </button>
        </Link>
      )}
    </>
  );
};
