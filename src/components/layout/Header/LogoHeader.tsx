import ResponsiveImage from "@/components/common/ResponsiveImage";
import { UI_TEXT } from "@/constants/uiText";
import { imageAssets } from "@/data/images";

export default function LogoHeader() {
  return (
    <ResponsiveImage
      asset={{
        ...imageAssets.logo,
        alt: UI_TEXT.brand.name,
        width: 88,
        height: 88,
        loading: undefined,
      }}
      imgClassName="w-22"
    />
  );
}
