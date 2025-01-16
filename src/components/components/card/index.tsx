import Image from "next/image";
import { Typography } from "../typography";
import { cn } from "@/utils/cn";

type CardProps = {
  className?: string;
  image: string;
  title: string;
  placeName: string;
};

type CardSecondaryProps = {
  className?: string;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
};
const Card = ({ className, image, title, placeName }: CardProps) => {
  return (
    <div
      className={`w-full overflow-hidden hover:shadow-lg transition-all duration-300 p-3 border border-colors-neutral-100 shadow-2xl shadow-colors-neutral-200 ${className}`}
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rotate-180"
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

const CardSecondary = ({
  className,
  title,
  description,
  variant = "primary",
}: CardSecondaryProps) => {
  const bgColor = variant === "primary" ? "bg-colors-primary-600" : "bg-white";
  const titleTextColor =
    variant === "primary" ? "text-white" : "text-colors-neutral-900";
  const descTextColor =
    variant === "primary" ? "text-white" : "text-colors-neutral-600";
  const buttonTextColor =
    variant === "primary" ? "text-white" : "text-colors-primary-600";

  return (
    <div
      className={cn(
        "w-full shadow-2xl shadow-colors-neutral-200",
        bgColor,
        className
      )}
    >
      <div className="h-1 bg-colors-primary-600" />
      <div className="px-5 pt-8 pb-9">
        <Typography variant="h2" className={cn(titleTextColor)}>
          {title}
        </Typography>
        <p className={cn("font-urbanist text-[15px] mb-4", descTextColor)}>
          {description}
        </p>
        <div className="flex justify-end mt-10 md:mt-20">
          <button className="hover:opacity-80 transition-opacity">
            <p
              className={cn(
                "font-galda font-semibold text-[15px] md:text-[20px]",
                buttonTextColor
              )}
            >
              More details →
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card, CardSecondary };
