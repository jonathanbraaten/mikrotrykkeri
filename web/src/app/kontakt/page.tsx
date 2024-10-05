import Footer from '../components/Footer';
import Header from '../components/Header';
import ResponsiveWrapper from '../components/ResponsiveWrapper';
import ContactForm from './components/form';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ResponsiveWrapper>
          <section>
            <h1>Kontakt oss</h1>
            <ContactForm />
          </section>
        </ResponsiveWrapper>
      </main>
      <Footer />
    </>
  );
}
