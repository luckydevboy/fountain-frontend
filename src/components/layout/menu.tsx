"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useClickAway } from "react-use";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Tab } from "@/components";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ onClose, isOpen }: Props) => {
  const menuRef = useRef(null);

  useClickAway(menuRef, () => {
    onClose();
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-10"
          />
          <motion.div
            initial={{ left: "-75%" }}
            animate={{ left: 0 }}
            exit={{ left: "-75%" }}
            className="bg-white fixed w-3/4 inset-y-0 overflow-y-auto z-20"
            ref={menuRef}
          >
            <XMarkIcon
              className="h-6 w-6 text-gray-400 mx-4 mt-4 mb-8"
              onClick={onClose}
            />
            <Tab
              tabs={[
                { title: "Women", children: renderWomenTab() },
                { title: "Men", children: renderMenTab() },
              ]}
            />
            <hr />
            <div className="p-4 space-y-4">
              <div className="font-semibold text-lg text-gray-600">Company</div>
              <div className="font-semibold text-lg text-gray-600">Stores</div>
            </div>
            <hr />
            <div className="p-4 space-y-4">
              <div className="font-semibold text-lg text-gray-600">
                Create an account
              </div>
              <Link
                href="/sign-in"
                className="font-semibold text-lg text-gray-600"
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;

const renderWomenTab = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center">
      <div>
        <Image
          src="/images/mega-menu-category-01.jpg"
          alt="New Arrivals"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">New Arrivals</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
      <div>
        <Image
          src="/images/mega-menu-category-02.jpg"
          alt="Basic Tees"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">Basic Tees</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
      <div>
        <Image
          src="/images/mega-menu-category-03.jpg"
          alt="Accessories"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">Accessories</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
      <div>
        <Image
          src="/images/mega-menu-category-04.jpg"
          alt="Carry"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">Carry</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
    </div>
  );
};

const renderMenTab = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center">
      <div>
        <Image
          src="/images/mega-menu-01-men-category-01.jpg"
          alt="New Arrivals"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">New Arrivals</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
      <div>
        <Image
          src="/images/mega-menu-01-men-category-02.jpg"
          alt="Basic Tees"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">Basic Tees</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
      <div>
        <Image
          src="/images/mega-menu-01-men-category-03.jpg"
          alt="Accessories"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">Accessories</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
      <div>
        <Image
          src="/images/mega-menu-01-men-category-04.jpg"
          alt="Carry"
          width={136}
          height={136}
          className="rounded-lg"
          priority={true}
        />
        <div className="mt-4 font-semibold">Carry</div>
        <div className="text-gray-500 text-sm">Shop Now</div>
      </div>
    </div>
  );
};
