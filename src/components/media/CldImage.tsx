//Specifically for render only
import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

type Props = { image: CloudinaryImage; alt: string; className?: string };

export function CldImage({ image, alt, className }: Props) {
  return <AdvancedImage cldImg={image} alt={alt} className={className} />;
}