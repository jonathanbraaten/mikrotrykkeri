import { createClient } from 'next-sanity';
console.log(process.env.NEXT_PUBLIC_PROJECT_ID);
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-10-01',
  useCdn: true,
});
