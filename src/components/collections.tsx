import Image from "next/image";

const items = [
  {
    image: {
      src: "/images/home-page-01-collection-01.jpg",
      alt: "Organized Desk Collection",
    },
    title: "Handcrafted Collection",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    image: {
      src: "/images/home-page-01-collection-02.jpg",
      alt: "Organized Desk Collection",
    },
    title: "Organized Desk Collection",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    image: {
      src: "/images/home-page-01-collection-03.jpg",
      alt: "Handcrafted collection",
    },
    title: "Handcrafted Collection",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
];

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

      <div className="flex flex-col md:flex-row gap-x-4 gap-y-12">
        {items.map((item, i) => (
          <div key={i} className="flex-1">
            <div className="relative w-full rounded-lg overflow-hidden h-[300px]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                objectFit="cover"
              />
            </div>
            <h2 className="text-slate-800 font-bold mt-4 mb-1">{item.title}</h2>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
