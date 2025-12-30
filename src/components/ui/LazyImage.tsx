import { useState } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function Image({
  src,
  alt,
  className = "",
  priority = false,
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-inherit" />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        className={`transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
