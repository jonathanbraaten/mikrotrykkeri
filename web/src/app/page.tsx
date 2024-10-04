import Footer from './components/Footer';
import Header from './components/Header';
import ResponsiveWrapper from './components/ResponsiveWrapper';
import { sanityClient } from '@/data/sanityClient/sanityClient';
export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <ResponsiveWrapper>{null}</ResponsiveWrapper>
      </main>
      <Footer />
    </>
  );
}
