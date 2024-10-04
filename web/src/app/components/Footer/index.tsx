import ResponsiveWrapper from '../ResponsiveWrapper';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <ResponsiveWrapper className="flex flex-col gap-14 py-20">
        <section className="flex flex-col md:flex-row md:flex-wrap gap-10">
          <div>
            <p className="mb-3">Mikrotrykk</p>
            <ul>
              <li>
                <Link href={'/om-oss'}>Om oss</Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={'https://www.facebook.com/hosangermikrotrykkeri?locale=nb_NO'}
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3"> Kundeservice</p>
            <ul>
              <li>
                <Link href={'/kontakt'}>Kontakt oss</Link>
              </li>
              <li>
                <Link href={''}>Spørsmål og svar</Link>
              </li>
              <li>
                <Link href={''}>Frakt og levering</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3">Vilkår og betingelser</p>
            <ul>
              {' '}
              <li>
                <Link href={''}>Kjøpsvilkår</Link>
              </li>
              <li>
                <Link href={''}>Brukervilkår</Link>
              </li>
              <li>
                <Link href={''}>Personvernerklæring</Link>
              </li>
              <li>
                <Link href={''}>Informasjonskapsler</Link>
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <span>@2024 Hosanger Mikrotrykkeri AS.</span>
      </ResponsiveWrapper>
    </footer>
  );
}
