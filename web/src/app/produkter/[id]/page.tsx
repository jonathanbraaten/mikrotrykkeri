import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import ResponsiveWrapper from '@/app/components/ResponsiveWrapper';
import { tshirtQuery } from '@/utils/supabase/queries/tshirtQuery';
import Product from './components/Products';
import { Suspense } from 'react';

type Props = {
  params: {
    id: number;
  };
};
export default async function Page({ params }: Props) {
  console.log(params);
  const product = await tshirtQuery(params.id);

  return (
    <>
      <Header />
      <main>
        <ResponsiveWrapper>
          <Suspense fallback={<p>...laster</p>}>
            {product &&
              product.map(
                ({
                  id,
                  name,
                  description,
                  sizes,
                  color,
                  price,
                  is_on_sale,
                  discount_price,
                  image_url,
                  image_alt,
                }) => (
                  <Product
                    key={id}
                    id={id}
                    name={name}
                    description={description}
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
          </Suspense>
        </ResponsiveWrapper>
      </main>
      <Footer />
    </>
  );
}
