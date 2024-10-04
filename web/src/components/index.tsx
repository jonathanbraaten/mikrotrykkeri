import HeroPageBlockComponent from './HeroPageBlock';
import { PAGE_QUERYResult } from '@/data/types/sanity.types';

export default async function PageBlockHandler({ data }: { data: PAGE_QUERYResult }) {
  /*   const data = await getPage(); */

  return (
    <>
      {data?.blocks?.map((pageBlock) => {
        switch (pageBlock._type) {
          case 'heroPageBlock':
            return <HeroPageBlockComponent key={pageBlock._key} data={pageBlock} />;
          default:
            return null;
        }
      })}
    </>
  );
}
