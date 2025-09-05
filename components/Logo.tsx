import React from "react";

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
      <img 
        src="/logo.jpg" 
        alt="Logo" 
        className={className}
        style={{ objectFit }}
      />
    );
  }
  return (
    <img 
      src="/logo.jpg" 
      alt="Logo" 
      className={className}
      style={{ objectFit }}
    />
  );
};

export default Logo;