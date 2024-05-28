"use client";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "@/components";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 z-10">
        {/* Mobile View */}
        <nav className="lg:hidden bg-black/20 px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            <Bars3Icon
              onClick={() => setMenuIsOpen(true)}
              className="text-white h-6 w-6"
            />
            <MagnifyingGlassIcon className="text-white h-6 w-6" />
          </div>
          <Image src="/images/logo.svg" width={36} height={36} alt="Logo" />
          <div className="flex items-center gap-x-6">
            <QuestionMarkCircleIcon className="text-white h-6 w-6" />
            <ShoppingBagIcon className="text-white h-6 w-6" />
          </div>
        </nav>

        {/* Desktop View */}
        <nav className="hidden lg:flex bg-black/20 px-8 h-16 items-center justify-between">
          <Image src="/images/logo.svg" width={36} height={36} alt="Logo" />
          <ul className="flex items-center gap-x-6">
            <li className="text-white font-medium">Women</li>
            <li className="text-white font-medium">Men</li>
            <li className="text-white font-medium">Company</li>
            <li className="text-white font-medium">Stores</li>
          </ul>
          <div className="flex items-center gap-x-6">
            <MagnifyingGlassIcon className="text-white h-6 w-6" />
            <QuestionMarkCircleIcon className="text-white h-6 w-6" />
            <ShoppingBagIcon className="text-white h-6 w-6" />
          </div>
        </nav>
      </header>

      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </>
  );
};

export default Header;
