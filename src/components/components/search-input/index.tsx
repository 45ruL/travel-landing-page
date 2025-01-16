import Image from "next/image";

export const SearchInput = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative flex items-center w-full max-w-[470px] ${className}`}
    >
      <div className="flex items-center gap-2 md:gap-4 w-full bg-white border border-colors-neutral-200 p-2 md:p-3 rounded-full hover:shadow-md transition-all duration-300">
        <Image
          src="/locationNoColor.png"
          alt="location icon"
          width={20}
          height={20}
          className="ml-2 md:ml-3 flex-shrink-0"
        />

        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full text-sm md:text-base text-colors-neutral-800 placeholder:text-colors-neutral-400 font-urbanist focus:outline-none"
        />

        <button
          type="button"
          className="flex items-center justify-center bg-colors-secondary p-2 md:p-3 rounded-full hover:brightness-95 active:scale-95 transition-all duration-200 flex-shrink-0"
        >
          <Image
            src="/search.png"
            alt="search icon"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
      </div>
    </div>
  );
};
