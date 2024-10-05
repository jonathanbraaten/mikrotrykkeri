'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
export default function Navigation() {
  const active = false;
  const pathName = usePathname();
  return (
    <nav
      className={clsx('flex gap-4  fixed  md:static right-0 top-0 ', {
        'translate-x-0': !active,
        'translate-x-full transition-transform 150ms ease-in-out': active,
      })}
    >
      <div className="hidden md:block">
        <p className="uppercase font-bold">Mikrotrykk</p>
      </div>

      <ul className="flex flex-col md:flex-row gap-6">
        {links.map(({ id, name, path }) => (
          <li
            className={clsx('hover:underline', {
              underline: pathName === path,
            })}
            key={id}
          >
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
