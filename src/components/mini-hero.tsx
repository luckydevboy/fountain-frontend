import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  buttonTitle: string;
};

const MiniHero = ({ imgSrc, description, title, buttonTitle }: Props) => {
  return (
    <div className="relative h-[600px] grid place-content-center mt-16 rounded-lg overflow-hidden m-6">
      <Image
        src={imgSrc}
        alt="Hero"
        fill
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority={true}
      />
      {/* TODO: Add new color */}
      <div className="absolute inset-0 bg-[#111827]/50" />
      <div className="relative grid place-content-center">
        <h1 className="text-white font-bold text-4xl text-center px-6">
          {title}
        </h1>
        <p className="text-white mt-4 mb-8 max-w-3xl text-center text-xl px-6">
          {description}
        </p>
        {/* TODO: Create the button component */}
        <button className="bg-white px-8 py-3 rounded-lg font-semibold text-gray-700 mx-auto hover:bg-gray-200 transition-colors">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default MiniHero;
