import Link from 'next/link';

export const links = [
  {
    id: 1,
    name: 'Hjem',
    path: '/',
  },
  {
    id: 2,
    name: 'Produkter',
    path: '/produkter',
  },
  {
    id: 3,
    name: 'Om oss',
    path: '/om-oss',
  },
  {
    id: 4,
    name: 'Kontakt oss',
    path: '/kontakt-oss',
  },
];
export default function NavigationMenu() {
  return (
    <ul className="flex gap-2">
      {links.map(({ id, name, path }) => (
        <li key={id}>
          <Link href={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
