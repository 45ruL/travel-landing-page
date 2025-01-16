import Image from "next/image";
import { Typography } from "../typography";

type CardProps = {
  className?: string;
  image: string;
  title: string;
  placeName: string;
};
const Card = ({ className, image, title, placeName }: CardProps) => {
  return (
    <div
      className={`w-full md:w-[350px] overflow-hidden hover:shadow-lg transition-all duration-300 p-3 border border-colors-neutral-100 ${className}`}
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover "
          alt="destination image"
        />
      </div>

      <div className="pt-4 space-y-2">
        <Typography variant="h3" className="line-clamp-1">
          {title}
        </Typography>

        <div className="flex items-center gap-2">
          <Image
            src="/location.png"
            alt="location icon"
            width={20}
            height={20}
            className="flex-shrink-0"
          />
          <Typography
            variant="bodySemiBold"
            className="text-colors-neutral-600 line-clamp-1"
          >
            {placeName}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const CardSecondary = () => {
  return (
    <>
      <div>SecondaryCard</div>
    </>
  );
};

export { Card, CardSecondary };
