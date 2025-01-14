import React from "react";

interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "bodySemiBold"
    | "bodyMedium"
    | "bodyRegular"
    | "bodySmSemiBold"
    | "bodySmMedium"
    | "bodySmRegular";
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  children,
  className = "",
}: TypographyProps) => {
  const variants = {
    h1: "font-galda font-normal text-[40px] leading-[52px] md:text-[72px] md:leading-[84px]",
    h2: "font-galda font-normal text-[28px] leading-[40px] md:text-[40px] md:leading-[62px]",
    h3: "font-urbanist font-bold text-[20px] leading-[28px] md:text-[24px] md:leading-[36px]",

    bodySemiBold:
      "font-urbanist font-semibold text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]",
    bodyMedium:
      "font-urbanist font-medium text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]",
    bodyRegular:
      "font-urbanist font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]",

    bodySmSemiBold:
      "font-urbanist font-semibold text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]",
    bodySmMedium:
      "font-urbanist font-medium text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]",
    bodySmRegular:
      "font-urbanist font-normal text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]",
  };

  const getComponent = (variant: string) => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      default:
        return "p";
    }
  };

  return React.createElement(
    getComponent(variant),
    { className: `${variants[variant]} ${className}` },
    children
  );
};

// Penggunaan
//   <Typography variant="h1">This is a heading</Typography>
//   <Typography variant="body">This is body text</Typography>
