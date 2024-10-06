import { tshirtsQuery } from '@/utils/supabase/queries/tshirtQuery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Metadata } from 'next';
import ArticleGrid from '../components/Grid';
import ArticleGridItem from '../components/Grid/components/ArticleGridItem';
import { Suspense } from 'react';
import ResponsiveWrapper from '../components/ResponsiveWrapper';
import { array } from 'zod';
import Link from 'next/link';
export const revalidate = 0;
export const metadata: Metadata = {
  title: 'Hosanger Mikrotrykkeri - Produkter',
  description: '',
};

export default async function Page() {
  const { data, error } = await tshirtsQuery;

  return (
    <>
      <Header />
      <main>
        <ResponsiveWrapper>
          <Suspense fallback={<p>laster...</p>}>
            <ArticleGrid>
              {data &&
                data.length > 0 &&
                data.map(
                  ({
                    id,
                    name,
                    sizes,
                    color,
                    price,
                    is_on_sale,
                    discount_price,
                    image_url,
                    image_alt,
                  }) => (
                    <ArticleGridItem
                      key={id}
                      id={id}
                      name={name}
                      sizes={sizes}
                      color={color}
                      price={price}
                      is_on_sale={is_on_sale}
                      discount_price={discount_price}
                      image_url={image_url}
                      image_alt={image_alt}
                    />
                  ),
                )}
            </ArticleGrid>
          </Suspense>
        </ResponsiveWrapper>

        {Array.isArray(data) && data.length === 0 && (
          <ResponsiveWrapper className="min-h-[75vh] flex justify-center items-center">
            <h1>
              <span>Her var det tomt! </span>
              <Link className="underline" href="/">
                Trykk her for å gå tilbake
              </Link>
            </h1>
          </ResponsiveWrapper>
        )}
      </main>
      <Footer />
    </>
  );
}
