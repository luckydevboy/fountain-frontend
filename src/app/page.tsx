"use client";

import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="relative h-[600px] grid place-content-center">
        <Header />
        <Image
          src="/images/home-page-01-hero-full-width.jpg"
          alt="Hero"
          fill
          objectFit="cover"
          quality={100}
          priority={true}
        />
        <div className="absolute inset-0 bg-[#111827]/50" />
        <div className="relative grid place-content-center">
          <h1 className="text-white font-bold text-4xl text-center">
            New arrivals are here
          </h1>
          <p className="text-white mt-4 mb-8 max-w-96 text-center text-xl">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they&#39;re still
            in stock.
          </p>
          {/* TODO: Create the button component */}
          <button className="bg-white px-8 py-3 rounded-lg font-semibold text-gray-700 mx-auto hover:bg-gray-200 transition-colors">
            Shop New Arrivals
          </button>
        </div>
      </div>
    </main>
  );
}
