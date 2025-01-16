"use client";

import Image from "next/image";
import { Typography } from "./components/typography";
import { Card } from "./components/card";
import { SearchInput } from "./components/search-input";
import { useRef, useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Handler untuk update activeIndex saat scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };
  const destinations = [
    {
      image: "/destinationImage.png",
      title: "Mirror Lake",
      placeName: "Jawa Tengah, Indonesia",
    },
    {
      image: "/destinationImage2.png",
      title: "Hot Air Ballon",
      placeName: "Cappadocia, Turkey",
    },
    {
      image: "/destinationImage3.png",
      title: "Oeschinen Lake",
      placeName: "Pasuruan, Indonesia",
    },
    {
      image: "/destinationImage4.png",
      title: "Rhine Falls",
      placeName: "Jawa Timur, Indonesia",
    },
    {
      image: "/destinationImage5.png",
      title: "Sunter Lake",
      placeName: "Jawa Timur, Indonesia",
    },
    {
      image: "/destinationImage6.png",
      title: "Negeri diatas awan",
      placeName: "Jawa Tengah, Indonesia",
    },
  ];
  return (
    <>
      {/* header */}
      <header>
        <nav className="flex items-center justify-between p-5 md:px-20 lg:px-32">
          <p className="font-galda font-semibold text-colors-primary-600 md:text-3xl">
            Travel
          </p>
          <Image src="/burgerMenu.png" alt="logo" width={20} height={24} />
        </nav>
      </header>

      <main>
        {/* hero section */}
        <div className="min-h-screen md:px-32 overflow-hidden">
          <div className="flex flex-col pt-12 md:pt-16 lg:pt-24">
            <div className="relative h-[280px] md:h-[720px] w-full">
              <Typography variant="display" className="text-center px-4">
                <span className="text-colors-primary-600">Travel</span> around
                the world
              </Typography>
              <Image
                src="/heroImage.png"
                alt="hero image"
                width={1000}
                height={5000}
                className="absolute bottom-0 object-contain z-20 w-full md:w-3/4 mx-auto left-0 right-0"
                priority
              />
              <Image
                src="/circle.png"
                alt="blur effect"
                width={1000}
                height={5000}
                className="absolute object-contain -z-10 w-full md:w-3/4 mx-auto left-0 right-0"
              />
              <Image
                src="/blur.png"
                alt="blur effect"
                width={1000}
                height={5000}
                className="absolute top-0 w-full object-contain -z-20"
              />
            </div>

            {/* Bottom Content */}
            <div className="bg-colors-primary-600 w-full py-6 md:py-10">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
                <Typography
                  variant="bodyMedium"
                  className="text-white text-center md:text-left max-w-2xl md:flex-1"
                >
                  Travel around the world to see the beauty of nature easily and
                  safely with Travel.
                </Typography>
                <div className="w-full h-px bg-white md:w-px md:h-20" />
                <p className="font-galda text-white text-center md:flex-1 md:text-[28px]">
                  We Are The Best Travel Agent
                </p>
                <div className="w-full h-px bg-white md:w-px md:h-20" />
                <Typography
                  variant="bodyMedium"
                  className="text-white text-center md:text-left max-w-2xl md:flex-1"
                >
                  Everyone is young once, but not everyone has traveled the
                  world!
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* destination section */}
        <div className="p-5 mb-20">
          <Typography variant="h1" className="mb-3">
            Find your best destination
          </Typography>
          <Typography variant="bodyMedium" className="mb-5">
            We have more than 1000+ destinations you can choose.
          </Typography>
          <SearchInput className="mb-7" />
          <div className="w-full px-4 md:px-6 lg:px-8">
            {/* Mobile View dengan Scroll */}
            <div className="md:hidden">
              {/* Scroll Container */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory flex gap-4"
              >
                {destinations?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[280px] snap-center"
                  >
                    <Card
                      image={item.image}
                      title={item.title}
                      placeName={item.placeName}
                    />
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {destinations?.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-blue-500 w-4" // active indicator
                        : "bg-gray-300" // inactive indicator
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop View dengan Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {destinations?.map((item, idx) => (
                <Card
                  key={idx}
                  image={item.image}
                  title={item.title}
                  placeName={item.placeName}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
