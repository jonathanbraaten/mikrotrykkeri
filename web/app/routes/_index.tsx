import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Forside',
      name: 'Meta data description',
      content: 'Velkommen til Hosanger Mikrotrykkeri',
    },
  ];
};

export default function Index() {
  return (
    <section>
      <h1>Home</h1>
    </section>
  );
}
