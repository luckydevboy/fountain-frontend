import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Categories = () => {
  return (
    <div className="p-4 mt-12">
      <div className="text-2xl font-extrabold mb-6 text-slate-800">
        Shop by Category
      </div>

      <div className="flex gap-x-4 overflow-x-auto">
        <div
          className="relative rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: 224, height: 320 }}
        >
          <Image
            src="/images/home-page-01-category-01.jpg"
            alt="Thermos"
            width={224}
            height={320}
            quality={100}
            priority={true}
            className="absolute"
          />
          <div className="bg-gradient-to-t from-slate-800 opacity-50 absolute inset-0"></div>
          <div className="absolute bottom-4 text-white font-bold text-xl right-1/2 translate-x-1/2 text-nowrap">
            New Arrivals
          </div>
        </div>
        <div
          className="relative rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: 224, height: 320 }}
        >
          <Image
            src="/images/home-page-01-category-02.jpg"
            alt="Thermos"
            width={224}
            height={320}
            quality={100}
            priority={true}
            className="absolute"
          />
          <div className="bg-gradient-to-t from-slate-800 opacity-50 absolute inset-0"></div>
          <div className="absolute bottom-4 text-white font-bold text-xl right-1/2 translate-x-1/2 text-nowrap">
            Productivity
          </div>
        </div>
        <div
          className="relative rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: 224, height: 320 }}
        >
          <Image
            src="/images/home-page-01-category-04.jpg"
            alt="Thermos"
            width={224}
            height={320}
            quality={100}
            priority={true}
            className="absolute"
          />
          <div className="bg-gradient-to-t from-slate-800 opacity-50 absolute inset-0"></div>
          <div className="absolute bottom-4 text-white font-bold text-xl right-1/2 translate-x-1/2 text-nowrap">
            Workspace
          </div>
        </div>
        <div
          className="relative rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: 224, height: 320 }}
        >
          <Image
            src="/images/home-page-01-category-05.jpg"
            alt="Thermos"
            width={224}
            height={320}
            quality={100}
            priority={true}
            className="absolute"
          />
          <div className="bg-gradient-to-t from-slate-800 opacity-50 absolute inset-0"></div>
          <div className="absolute bottom-4 text-white font-bold text-xl right-1/2 translate-x-1/2 text-nowrap">
            Accessories
          </div>
        </div>
        <div
          className="relative rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: 224, height: 320 }}
        >
          <Image
            src="/images/home-page-01-category-03.jpg"
            alt="Thermos"
            width={224}
            height={320}
            quality={100}
            priority={true}
            className="absolute"
          />
          <div className="bg-gradient-to-t from-slate-800 opacity-50 absolute inset-0"></div>
          <div className="absolute bottom-4 text-white font-bold text-xl right-1/2 translate-x-1/2 text-nowrap">
            Sale
          </div>
        </div>
      </div>
      <div className="text-indigo-700 font-bold text-sm flex gap-x-2 items-center mt-4">
        Browse all categories <ArrowRightIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Categories;
