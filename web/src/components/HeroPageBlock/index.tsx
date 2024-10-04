import { HeroPageBlock } from '@/data/types/types';
import { urlFor } from '@/utils/urlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
type Props = {
  data: HeroPageBlock;
};
export default function HeroPageBlockComponent({ data }: Props) {
  console.log(data);
  return (
    <section>
      <Image
        src={urlFor(data.heroImage as SanityImageObject).url()}
        width={500}
        height={500}
        alt=""
      />
    </section>
  );
}
