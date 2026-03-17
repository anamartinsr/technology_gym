import type { JSX } from "react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import UnitCard from "@/components/Sections/Unit/UnitCard";
import { imageAssets } from "@/data/images";
import { units } from "@/data/unit";
import { UI_TEXT } from "@/constants/uiText";

export default function Units(): JSX.Element {
  return (
    <section
      id="unit"
      className="bg-(--secondary-color) py-16 md:py-20 px-6 md:px-20 text-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <Title variant="primary" text={UI_TEXT.sections.units} />
        <ResponsiveImage
          asset={{ ...imageAssets.logo, width: 208, height: 64 }}
          imgClassName="h-12 md:h-16"
        />
      </div>

      <Text
        pColor="text-white"
        spanColor="text-(--primary-color)"
        before="Encontre a unidade mais "
        textSpan="próxima a você "
        after="e comece sua transformação hoje mesmo."
      />

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 w-full max-w-6xl mx-auto">
        {units.map((unit) => (
          <UnitCard key={unit.name} unit={unit} />
        ))}
      </div>
    </section>
  );
}
