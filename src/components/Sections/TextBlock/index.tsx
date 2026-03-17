import type { JSX } from "react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { UI_TEXT } from "@/constants/uiText";
import { imageAssets } from "@/data/images";

export default function TextBlock(): JSX.Element {
  return (
    <section className="bg-(--secondary-color) text-white py-20 px-6 md:px-20 text-center">
      <ResponsiveImage asset={imageAssets.logo} imgClassName="w-50" />
      <div className="max-w-3xl mx-auto gap-6 flex flex-col items-center">
        <Title variant="primary" text={UI_TEXT.sections.bestGymTitle} />

        <Text
          pColor="text-white"
          spanColor="text-(--primary-color)"
          before="Na "
          textSpan={UI_TEXT.brand.name}
          after=", oferecemos inovação, tecnologia e cuidado em cada detalhe para que você alcance seus objetivos com motivação e bem-estar."
        />

        <Button
          text={UI_TEXT.cta.startNow}
          variant="primary"
          to="/enrollment"
        />
      </div>
    </section>
  );
}
