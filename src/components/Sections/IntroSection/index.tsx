import type { JSX } from "react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { scrollToSection } from "@/utils/scrollToSection";
import { introSectionActions } from "@/data/navigation";
import { UI_TEXT } from "@/constants/uiText";
import { imageAssets } from "@/data/images";

export default function IntroSection(): JSX.Element {
  return (
    <div className="relative w-full h-auto md:h-auto">
      <ResponsiveImage
        asset={imageAssets.homeHero}
        imgClassName="w-full h-[450px] object-cover"
      />

      <div className="absolute top-1/4 md:top-1/3 left-6 md:left-16 flex flex-col items-start md:items-start text-white max-w-xl">
        <Title as="h1" variant="primary" text={UI_TEXT.brand.name} />

        <Text
          pColor="text-white"
          before="Transforme seu "
          textSpan="treino "
          after="com inovação, tecnologia e bem-estar."
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {introSectionActions.map((button) => (
            <Button
              key={button.text}
              text={button.text}
              variant="primary"
              to={button.kind === "route" ? button.to : undefined}
              onClick={
                button.kind === "section"
                  ? (e) => scrollToSection(e, button.href)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
