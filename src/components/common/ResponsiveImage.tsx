import type { ImgHTMLAttributes } from "react";

import type { AppImageAsset } from "@/data/images";

interface ResponsiveImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height" | "loading" | "decoding"
  > {
  asset: AppImageAsset;
  pictureClassName?: string;
  imgClassName?: string;
  sourcesEnabled?: boolean;
}

export default function ResponsiveImage({
  asset,
  pictureClassName,
  imgClassName,
  sourcesEnabled = false,
  ...imgProps
}: ResponsiveImageProps) {
  const shouldRenderModernSources =
    sourcesEnabled &&
    (Boolean(asset.formats?.avif) || Boolean(asset.formats?.webp));

  return (
    <picture className={pictureClassName}>
      {shouldRenderModernSources && asset.formats?.avif ? (
        <source srcSet={asset.formats.avif} type="image/avif" />
      ) : null}
      {shouldRenderModernSources && asset.formats?.webp ? (
        <source srcSet={asset.formats.webp} type="image/webp" />
      ) : null}
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={asset.loading}
        decoding={asset.decoding}
        fetchPriority={asset.fetchPriority}
        className={imgClassName}
        {...imgProps}
      />
    </picture>
  );
}
