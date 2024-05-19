import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <div className="relative h-[600px] grid place-content-center">
        <header className="absolute inset-x-0 z-10">
          <nav className="bg-white/10 px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-x-6">
              <Bars3Icon className="text-white h-6 w-6" />
              <MagnifyingGlassIcon className="text-white h-6 w-6" />
            </div>
            <Image src="/images/logo.svg" width={36} height={36} alt="Logo" />
            <div className="flex items-center gap-x-6">
              <QuestionMarkCircleIcon className="text-white h-6 w-6" />
              <ShoppingBagIcon className="text-white h-6 w-6" />
            </div>
          </nav>
        </header>
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
