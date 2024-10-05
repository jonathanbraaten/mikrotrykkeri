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
export default function NavigationMenu() {
  const pathName = usePathname();
  return (
    <ul className="flex gap-6">
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
  );
}
