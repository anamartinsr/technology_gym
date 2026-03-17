import ResponsiveImage from "@/components/common/ResponsiveImage";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import EnrollmentForm from "@/components/form/EnrollmentForm";
import { UI_TEXT } from "@/constants/uiText";
import { imageAssets } from "@/data/images";

export default function Enrollment() {
  return (
    <>
      <section className=" bg-(--secondary-color) p-8">
        <div className="flex flex-col">
          <div className="relative w-full md:h-50 h-screen">
            <ResponsiveImage
              asset={imageAssets.enrollmentHero}
              imgClassName="w-full h-full object-cover"
            />

            <div className="absolute top-1/4 md:top-1/3 left-6 md:left-16 flex flex-col items-start md:items-start text-white max-w-xl">
              <Title as="h1" variant="primary" text={UI_TEXT.brand.name} />

              <Text
                pColor="text-white"
                before="Faça sua "
                textSpan="Matrícula "
                after="e vem fazer parte da nossa família."
              />
            </div>
          </div>
          <EnrollmentForm />
        </div>
      </section>
    </>
  );
}
