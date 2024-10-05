import PageBlockHandler from '@/components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { sanityClient } from '@/data/sanityClient/sanityClient';
import { PAGE_QUERYResult } from '@/data/types/sanity.types';
import { PAGE_QUERY } from '@/data/queries/fetchPageQuery';
import { notFound } from 'next/navigation';

async function getPage(slug: string): Promise<PAGE_QUERYResult> {
  const pageData = await sanityClient.fetch(PAGE_QUERY, { slug });
  return pageData;
}
export async function generateMetadata() {
  const page = await getPage('hjem');
  return {
    title: page?.title ? page?.title : 'Hosanger Mikrotrykkeri - Forsiden',
    description: page?.metaData?.metaDescription || 'Hosanger Mikrotrykkeri',
  };
}

export default async function Home({ params }: { params: string }) {
  console.log(params);
  const page = await getPage('hjem');
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
