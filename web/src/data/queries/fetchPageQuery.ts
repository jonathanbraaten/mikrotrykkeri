import { defineQuery } from 'groq';

export const PAGE_QUERY = defineQuery(`
*[_type == 'page' && slug.current == $slug][0]{
blocks[]{
  ...,
  _type == 'heroPageBlock'=> {
    heroImage,
    heroTitle,
    heroDescription
  }
}}
  `);
