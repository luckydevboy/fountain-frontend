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
    <header className="absolute inset-x-0 z-10">
      <nav className="bg-white/10 px-4 h-16 flex items-center justify-between">
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
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </header>
  );
};

export default Header;
