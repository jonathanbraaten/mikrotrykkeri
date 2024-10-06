'use client';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ChangeEvent, useState } from 'react';
type Props = {
  id: number;
  name: string;
  description: string;
  sizes: string[];
  color: string[];
  price: number;
  is_on_sale: boolean;
  discount_price: number;
  image_url: string;
  image_alt: string;
};
export const revalidate = 0;

export default function Product({
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
}: Props) {
  const hasColor = color ? color[0][0].toUpperCase() + color[0].slice(1).toLowerCase() : '';
  const [selectedColor, setSelectedColor] = useState(hasColor);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const handleSelectedColor = (e: string) => {
    const modStr = e[0].toUpperCase() + e.slice(1);
    setSelectedColor(modStr);
  };
  const handleSelectedSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  return (
    <article className="flex">
      <div>
        <Image
          priority
          width={500}
          height={500}
          className="aspect-auto object-cover w-full"
          src={image_url}
          alt={image_alt}
        />
        {description ? <p>{description}</p> : <p>Ingen beskrivelse tilgjengelig</p>}
      </div>
      <div>
        <div className="flex flex-col">
          <h1>{name}</h1>
          {discount_price ? (
            <p className="flex gap-2">
              <span className="line-through">{price} kr</span>
              <span className="font-bold">{price - discount_price} kr</span>
            </p>
          ) : (
            <p className="font-bold">{price} kr</p>
          )}
        </div>

        {color && color.length > 0 && (
          <div className="flex flex-col">
            <span>Farge: {selectedColor}</span>
            <div className="flex gap-2">
              {color.map((col: string, index: number) => {
                return (
                  <span
                    onClick={() => handleSelectedColor(color[index])}
                    key={index}
                    className={clsx(styles[col], 'w-[2rem] h-[2rem] rounded-full cursor-pointer')}
                  ></span>
                );
              })}
            </div>

            <label htmlFor="sizes">
              <select
                value={selectedSize}
                onChange={(e) => handleSelectedSize(e)}
                name="sizes"
                id="sizes"
              >
                <option value="" disabled hidden>
                  Velg størrelse
                </option>
                {sizes.map((size, index) => {
                  return (
                    <option key={index} value={clsx(size)}>
                      {size.toUpperCase()}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        )}

        <button className="bg-slate-200">Legg til i handlekurv</button>
      </div>
    </article>
  );
}
