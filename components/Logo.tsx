import React from "react";
import Image from "next/image";

const Logo = ({
  className,
  variant,
  objectFit = "contain",
}: {
  className: string;
  variant?: "icon" | "logo";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}) => {
  if (variant === "icon") {
    return (
      <Image 
        src="/logo.jpg" 
        alt="Logo" 
        className={className}
        style={{ objectFit }}
        width={100}
        height={100}
      />
    );
  }
  return (
    <Image 
      src="/logo.jpg" 
      alt="Logo" 
      className={className}
      style={{ objectFit }}
      width={200}
      height={100}
    />
  );
};

export default Logo;