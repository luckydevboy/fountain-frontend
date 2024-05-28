import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const images = [
  {
    title: "New Arrivals",
    imgSrc: "/images/home-page-01-category-01.jpg",
    imgAlt: "New Arrivals",
  },
  {
    title: "Productivity",
    imgSrc: "/images/home-page-01-category-02.jpg",
    imgAlt: "Productivity",
  },
  {
    title: "Workspace",
    imgSrc: "/images/home-page-01-category-03.jpg",
    imgAlt: "Workspace",
  },
  {
    title: "Accessories",
    imgSrc: "/images/home-page-01-category-04.jpg",
    imgAlt: "Accessories",
  },
  {
    title: "Sale",
    imgSrc: "/images/home-page-01-category-05.jpg",
    imgAlt: "Sale",
  },
];

const Categories = () => {
  return (
    <div className="p-4 mt-12 max-w-fit mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-extrabold text-slate-800">
          Shop by Category
        </div>
        <div className="hidden text-indigo-700 font-bold text-sm lg:flex gap-x-2 items-center mt-4">
          Browse all categories <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>

      <div className="flex gap-x-4 overflow-x-auto pb-4">
        {images.map((image, i) => (
          <div
            className="relative rounded-lg overflow-hidden flex-shrink-0"
            style={{ width: 224, height: 320 }}
            key={i}
          >
            <Image
              src={image.imgSrc}
              alt={image.imgAlt}
              width={224}
              height={320}
              quality={100}
              priority={true}
              className="absolute"
            />
            <div className="bg-gradient-to-t from-slate-800 opacity-50 absolute inset-0"></div>
            <div className="absolute bottom-4 text-white font-bold text-xl right-1/2 translate-x-1/2 text-nowrap">
              {image.title}
            </div>
          </div>
        ))}
      </div>
      <div className="text-indigo-700 font-bold text-sm flex lg:hiddene gap-x-2 items-center mt-4">
        Browse all categories <ArrowRightIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Categories;
