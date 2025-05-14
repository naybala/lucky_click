import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const { t } = useTranslation('common');
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white shadow">
      <div>{t('language')}</div>
      <div className="flex gap-2">
        <Link href={{ pathname, query }} as={asPath} locale="en">
          <button className="px-3 py-1 border rounded" disabled={locale === 'en'}>{t('english')}</button>
        </Link>
        <Link href={{ pathname, query }} as={asPath} locale="mm">
          <button className="px-3 py-1 border rounded" disabled={locale === 'mm'}>{t('myanmar')}</button>
        </Link>
        <button onClick={toggleTheme} className="px-3 py-1 border rounded">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
}