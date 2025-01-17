"use client";

import Image from "next/image";
import { Typography } from "../components/components/typography";
import { Card, CardSecondary } from "../components/components/card";
import { SearchInput } from "../components/components/search-input";
import { useRef, useState } from "react";
import Link from "next/link";

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
                  <p className="font-urbanist font-semibold text-[15px] text-white">
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

        {/* section video */}
        <section className="py-20">
          <div className="px-5 md:px-[120px]">
            <Typography variant="h1" className="text-center mb-10">
              Watch our entire trip documentation
            </Typography>
          </div>

          <div className="relative w-full aspect-video overflow-hidden">
            <div className="relative w-full h-full cursor-pointer group">
              <Image
                src="/thumbnail.png"
                fill
                className="object-cover rotate-180"
                alt="video thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-colors-neutral-300 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src="/play.png"
                    width={32}
                    height={32}
                    alt="play icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-20">
        <div className="px-5 md:px-[120px] md:flex justify-between items-center">
          <Typography variant="h1">Get our best offer now!</Typography>
          <button className="bg-colors-primary-600 py-4 px-8 mt-4 md:mt-0">
            <p className="font-urbanist font-semibold text-[18px] text-white">
              Click here!
            </p>
          </button>
        </div>
        <div className="h-[1px] bg-colors-neutral-200 my-10" />
        <div className="px-5 md:px-[120px]">
          <div>
            <p className="font-galda text-[16px] md:text-[28px] font-semibold text-colors-primary-600">
              Travel
            </p>
            <Typography variant="bodyMedium" className="mt-2 mb-6">
              The best travel agent in the world. Contact us immediatly now!
            </Typography>
          </div>
          <div className="md:flex justify-between">
            <div className="flex items-center gap-3 md:gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-colors-primary-600 bg-colors-primary-100 p-2 md:p-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-colors-primary-600 bg-colors-primary-100 p-2 md:p-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-colors-primary-600 bg-colors-primary-100 p-2 md:p-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            <div className="mt-7 md:mt-0">
              <ul className="flex gap-5">
                <li>
                  <Link href={"#"}>
                    <Typography variant="bodySemiBold">Home</Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Typography variant="bodySemiBold">Destinations</Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Typography variant="bodySemiBold">Guide</Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Typography variant="bodySemiBold">Contact Us</Typography>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
