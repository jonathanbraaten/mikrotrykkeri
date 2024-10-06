import clsx from 'clsx';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
  id: number;
  name: string;
  sizes: string[];
  color: string[];
  price: number;
  is_on_sale: boolean;
  discount_price: number;
  image_url: string;
  image_alt: string;
};
export default function ArticleGridItem({
  id,
  name,
  sizes,
  color,
  price,
  is_on_sale,
  discount_price,
  image_url,
  image_alt,
}: Props) {
  return (
    <li className={clsx(styles.article_subgrid, 'relative')}>
      <div>
        <Image
          className="w-full aspect-auto object-cover"
          width={200}
          height={300}
          src={image_url}
          alt={image_alt}
        />
      </div>
      {is_on_sale ? (
        <>
          <p>{name}</p>
          <p className="flex gap-2">
            <span className="line-through">{price} kr</span>
            <span className="font-bold">{price - discount_price} kr</span>
          </p>
        </>
      ) : (
        <>
          <p>{name}</p>
          <p className="font-bold">{price} kr</p>
        </>
      )}
      <Link className="absolute  inset-0" href={`/produkter/${id}`}></Link>
    </li>
  );
}
