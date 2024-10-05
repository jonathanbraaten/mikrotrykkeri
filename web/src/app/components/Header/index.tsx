import ResponsiveWrapper from '../ResponsiveWrapper';
import Navigation from '../Navigation';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
  return (
    <header>
      <ResponsiveWrapper className="flex justify-between items-center py-4">
        <div className="block md:hidden">
          <p className="uppercase font-bold">MIKROTRYKk</p>
        </div>
        <Navigation />
        <div className="flex  gap-4">
          <MdOutlineShoppingBag size={24} />
          <button className="flex gap-1 bg-slate-100 rounded-full py-1 px-2 md:hidden">
            <span> Meny</span>
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </ResponsiveWrapper>
    </header>
  );
}
