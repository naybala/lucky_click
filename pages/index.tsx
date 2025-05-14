import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Header from '../components/Header';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen text-black dark:text-white">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl">{t('title')}</h1>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});