import { sanityClient } from '@/data/sanityClient/sanityClient';
import { SanityImageAsset } from '@/data/types/sanity.types';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageObject | SanityImageAsset) {
  return builder.image(source).auto('format');
}
