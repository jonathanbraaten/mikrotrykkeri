import PageBlockHandler from '@/components';
import Footer from './components/Footer';
import Header from './components/Header';
import { sanityClient } from '@/data/sanityClient/sanityClient';
import { PAGE_QUERYResult } from '@/data/types/sanity.types';
import { PAGE_QUERY } from '@/data/queries/fetchPageQuery';
import { notFound } from 'next/navigation';
async function getPage(): Promise<PAGE_QUERYResult> {
  const pageData = await sanityClient.fetch(PAGE_QUERY, { slug: 'hjem' });
  return pageData;
}
export default async function Home() {
  const page = await getPage();
  if (!page) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageBlockHandler data={page} />
      </main>
      <Footer />
    </>
  );
}
