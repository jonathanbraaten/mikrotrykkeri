import { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResponsiveWrapper from '../components/ResponsiveWrapper';
import Form from './components/Form';

export const metadata: Metadata = {
  title: 'Hosanger Mikrotrykkeri - Kontakt',
  description: '',
};
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ResponsiveWrapper className="max-w-[45rem] w-full px-2">
          <section className="my-10 flex flex-col gap-5">
            <h1>Kontakt oss</h1>
            <Form />
          </section>
        </ResponsiveWrapper>
      </main>
      <Footer />
    </>
  );
}
