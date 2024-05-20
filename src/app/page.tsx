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
            محصولات جدید
          </h1>
          <p className="text-white mt-4 mb-8 max-w-96 text-center text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-medium text-gray-700 mx-auto hover:bg-gray-200 transition-colors">
            خرید محصولات جدید
          </button>
        </div>
      </div>
    </main>
  );
}
