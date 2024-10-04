import Footer from './components/Footer';
import Header from './components/Header';
import ResponsiveWrapper from './components/ResponsiveWrapper';

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
