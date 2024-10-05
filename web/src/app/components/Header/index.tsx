'use client';
import ResponsiveWrapper from '../ResponsiveWrapper';
import Navigation from '../Navigation';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Hamburger from './components/hamburger';
import HamburgerButton from './components/hamburger';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const openNavigation = () => setIsActive(true);
  const closeNavigation = () => setIsActive(false);
  return (
    <header>
      <ResponsiveWrapper className="flex justify-between items-center py-4">
        <div className="block md:hidden">
          <p className="uppercase font-bold">MIKROTRYKk</p>
        </div>
        <Navigation isActive={isActive} onClick={closeNavigation} />
        <div className="flex items-center  gap-4">
          <MdOutlineShoppingBag size={24} />
          <HamburgerButton onClick={openNavigation} />
        </div>
      </ResponsiveWrapper>
    </header>
  );
}
