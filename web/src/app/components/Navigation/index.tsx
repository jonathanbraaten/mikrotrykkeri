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
    path: '/kontakt',
  },
];
type Props = {
  isActive: boolean;
  onClick: () => void;
};
export default function Navigation({ isActive, onClick }: Props) {
  console.log(isActive);
  const pathName = usePathname();
  return (
    <nav
      className={clsx(
        'bg-white p-4 flex flex-col md:flex-row gap-4  fixed  md:static right-0 top-0 md:translate-x-0',
        {
          'translate-x-0 transition-transform 150ms ease-in-out': isActive,
          'translate-x-full ': !isActive,
        },
      )}
    >
      <div className="hidden md:block">
        <p className="uppercase font-bold">Mikrotrykk</p>
      </div>

      <button onClick={onClick} className="md:hidden">
        Close Menu
      </button>
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
