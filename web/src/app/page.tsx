import PageBlockHandler from '@/components';
import Footer from './components/Footer';
import Header from './components/Header';

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <PageBlockHandler />
      </main>
      <Footer />
    </>
  );
}
