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
        <ResponsiveWrapper>
          <section>
            <h1>Kontakt oss</h1>
            <Form />
          </section>
        </ResponsiveWrapper>
      </main>
      <Footer />
    </>
  );
}
