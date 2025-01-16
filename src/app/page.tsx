"use client";

import Image from "next/image";
import { Typography } from "../components/components/typography";
import { Card, CardSecondary } from "../components/components/card";
import { SearchInput } from "../components/components/search-input";
import { useRef, useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

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

  const whyMeData = [
    {
      title: "Best Guide, Best Experience.",
      description: "Your trip will be very memorable with the best guide.",
    },
    {
      title: "Always have Special Tickets.",
      description:
        "We always offer special tickets and we give them to all customers",
    },
    {
      title: "Always Ready Support 24/7.",
      description: "We always make time to ask questions anytime and anywhere.",
    },
  ];
  return (
    <>
      {/* header */}
      <header>
        <nav className="flex items-center justify-between p-5 md:px-20 lg:px-32">
          <p className="font-galda font-semibold text-colors-primary-600 text-xl md:text-3xl">
            Travel
          </p>
          <Image
            src="/burgerMenu.png"
            alt="logo"
            width={20}
            height={24}
            className="dark:invert"
          />
        </nav>
      </header>

      <main className="container">
        {/* hero section */}
        <section className="md:px-32 overflow-hidden">
          <div className="flex flex-col pt-24 md:pt-16 lg:pt-24">
            <div className="relative h-[280px] md:h-[720px] w-full">
              <Typography variant="display" className="text-center px-4">
                <span className="text-colors-primary-600">Travel</span> around
                the world
              </Typography>
              <Image
                src="/hero.png"
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
        </section>

        {/* destination section */}
        <section className="px-5 md:px-[120px] py-20">
          <div className="md:flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="h1" className="mb-3">
                Find your best destination
              </Typography>
            </div>
            <div className="flex flex-col items-end mb-7 flex-1">
              <Typography variant="bodyMedium" className="mb-5">
                We have more than 1000+ destinations you can choose.
              </Typography>
              <SearchInput />
            </div>
          </div>
          <div className="w-full">
            {/* mobile */}
            <div className="md:hidden">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory flex gap-4"
              >
                {destinations?.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full snap-center">
                    <Card
                      image={item.image}
                      title={item.title}
                      placeName={item.placeName}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {destinations?.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-colors-primary-600 w-5"
                        : "bg-colors-primary-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* desktop */}
            <div className="hidden md:grid grid-cols-3 gap-8">
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
        </section>

        {/* why choose us section */}
        <section className="px-5 md:px-[120px] py-20 ">
          <div className="text-center">
            <Typography variant="h1">Why must choose us</Typography>
            <Typography variant="bodyMedium" className="mt-3 mb-7">
              We have been around for over 10 years. Accompany all our customers
              all over the world. Thousands of our customers always recommend us
              because of the service we provide. We are always re-elected and
              now you will choose us as your travel agent!
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {whyMeData?.map((item, idx) => {
              const variant = idx % 2 !== 0 ? "primary" : "secondary";
              return (
                <CardSecondary
                  key={idx}
                  title={item.title}
                  description={item.description}
                  variant={variant}
                />
              );
            })}
          </div>
        </section>

        {/* section gatau */}
        <section className="px-5 md:px-[120px] py-20">
          <div className="md:grid grid-cols-2 justify-center items-center">
            <div className="flex flex-col gap-4">
              <Typography variant="h1">
                <span className="text-colors-primary-600">Travel</span>, make
                the trip memorable
              </Typography>
              <Typography variant="bodyMedium">
                Thousands of our customers always recommend us because of the
                service we provide. Your trip will be very memorable with the
                best travel agent,{" "}
                <span className="text-colors-primary-600">Travel!</span>
              </Typography>
              <div className="hidden md:block mt-4">
                <button className="bg-colors-primary-600 py-4 px-8 mr-5">
                  <p className="font-urbanist text-[15px] text-white">
                    See More
                  </p>
                </button>
                <button>
                  <p className="font-urbanist text-[15px] text-neutral-900 underline">
                    Discover More
                  </p>
                </button>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[400px] ">
              <Image
                src={"/sectionImage.png"}
                width={800}
                height={600}
                alt="image"
                className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2"
              />
              <Image
                src={"/shape.png"}
                width={700}
                height={600}
                alt="shape"
                className="absolute z-0 bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px]"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
