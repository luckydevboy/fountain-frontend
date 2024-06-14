import Image from "next/image";
import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <div className="relative h-[600px] grid place-content-center">
      <Image
        src="/images/home-page-01-hero-full-width.jpg"
        alt="Hero"
        fill
        objectFit="cover"
        quality={100}
        priority={true}
      />
      {/* TODO: Add new color */}
      <div className="absolute inset-0 bg-[#111827]/50" />
      <div className="relative grid place-content-center">
        <h1 className="text-white font-bold text-4xl text-center px-6">
          New arrivals are here
        </h1>
        <p className="text-white mt-4 mb-8 max-w-3xl text-center text-xl px-6">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they&#39;re still in
          stock.
        </p>
        <Button color="secondary" size="large" className="max-w-max mx-auto">
          Shop New Arrivals
        </Button>
      </div>
    </div>
  );
};

export default Hero;
