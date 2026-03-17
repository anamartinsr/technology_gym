import ResponsiveImage from "@/components/common/ResponsiveImage";
import { imageAssets } from "@/data/images";

export default function FaqIllustration() {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <ResponsiveImage
        asset={imageAssets.faqIllustration}
        imgClassName="w-full max-w-sm h-auto object-contain"
      />
    </div>
  );
}
