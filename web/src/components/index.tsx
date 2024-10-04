import { PAGE_QUERY } from '@/data/queries/fetchPageQuery';
import { sanityClient } from '@/data/sanityClient/sanityClient';
import HeroPageBlockComponent from './HeroPageBlock';
import { PAGE_QUERYResult } from '@/data/types/sanity.types';

async function getPage(): Promise<PAGE_QUERYResult> {
  const pageData = await sanityClient.fetch(PAGE_QUERY, { slug: 'hjem' });
  return pageData;
}

export default async function PageBlockHandler() {
  const data = await getPage();

  return (
    <>
      {data?.blocks?.map((pageBlock) => {
        switch (pageBlock._type) {
          case 'heroPageBlock':
            return <HeroPageBlockComponent data={pageBlock} />;
          default:
            return null;
        }
      })}
    </>
  );
}
