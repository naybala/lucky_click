import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Header from "../components/Header";
import { useProducts } from "../hooks/useProducts";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("common");
  const { data: products, isLoading, isError } = useProducts();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen text-black dark:text-white">
      <Header />
      <main className="max-w-7xl mx-auto pt-4 px-4">
        <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>

        {isLoading && <p>Loading products...</p>}
        {isError && <p>Failed to load products.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products?.map((product: any) => (
            <Link href={`/products/${product.id}`}>
              <div
                key={product.id}
                className="bg-white dark:bg-gray-700 p-4 rounded shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-2"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});
