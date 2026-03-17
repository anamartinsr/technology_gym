import { useState, useEffect } from "react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import type { AppImageAsset } from "@/data/images";

interface CarroselProps {
  images: readonly { image?: AppImageAsset; value?: string }[];
  interval?: number;
}

export default function Carrosel({ images, interval = 3000 }: CarroselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <ResponsiveImage
          key={index}
          asset={
            image.image
              ? {
                  ...image.image,
                  loading: index === currentIndex ? "eager" : "lazy",
                }
              : {
                  src: "",
                  alt: "",
                  width: 640,
                  height: 384,
                }
          }
          imgClassName={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`Ir para slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setCurrentIndex(index);
              }
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
