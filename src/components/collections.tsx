import Image from "next/image";

const Collections = () => {
  return (
    <div className="p-6 mt-16">
      <h1 className="text-slate-800 text-2xl font-extrabold">
        Shop by Collection
      </h1>
      <p className="mt-3 mb-8 text-slate-600">
        Each season, we collaborate with world-class designers to create a
        collection inspired by the natural world.
      </p>

      <div className="relative w-full rounded-lg overflow-hidden h-[300px]">
        <Image
          src="/images/home-page-01-collection-01.jpg"
          alt="Handcrafted collection"
          fill
          objectFit="cover"
        />
      </div>
      <h2 className="text-slate-800 font-bold mt-4 mb-1">
        Handcrafted Collection
      </h2>
      <p className="text-sm text-slate-600">
        Keep your phone, keys, and wallet together, so you can lose everything
        at once.
      </p>

      <div className="relative w-full rounded-lg overflow-hidden h-[300px] mt-12">
        <Image
          src="/images/home-page-01-collection-02.jpg"
          alt="Handcrafted collection"
          fill
          objectFit="cover"
        />
      </div>
      <h2 className="text-slate-800 font-bold mt-4 mb-1">
        Organized Desk Collection
      </h2>
      <p className="text-sm text-slate-600">
        The rest of the house will still be a mess, but your desk will look
        great.
      </p>

      <div className="relative w-full rounded-lg overflow-hidden h-[300px] mt-12">
        <Image
          src="/images/home-page-01-collection-03.jpg"
          alt="Handcrafted collection"
          fill
          objectFit="cover"
        />
      </div>
      <h2 className="text-slate-800 font-bold mt-4 mb-1">Focus Collection</h2>
      <p className="text-sm text-slate-600">
        Be more productive than enterprise project managers with a single piece
        of paper.
      </p>
    </div>
  );
};

export default Collections;
