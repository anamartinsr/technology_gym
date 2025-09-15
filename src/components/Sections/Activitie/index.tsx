import Button from "../../ui/Button";
import Carrosel from "../../ui/Carrosel";
import Text from "../../common/Text";
import Title from "../../common/Title";
import Weigths from "../../../assets/weigths.jpg";
import Swimming from "../../../assets/swimming.jpg";
import Zumba from "../../../assets/zumba.jpg";
import Crossfit from "../../../assets/crossfit.jpg";
import Yoga from "../../../assets/yoga.jpg";
import BulletItem from "./BulletItem";

export default function Activitie() {
  const images = [
    { src: Zumba, alt: "Zumba Technology" },
    { src: Crossfit, alt: "Crossfit Technology" },
    { src: Yoga, alt: "Yoga Technology" },
    { src: Weigths, alt: "Weigths Technology" },
    { src: Swimming, alt: "Swimming Technology" },
  ];

  const activities = [
    "Sauna",
    "Musculação",
    "CrossFit",
    "Spinning",
    "Pilates",
    "Natação",
  ];

  return (
    <section
      id="activitie"
      className="bg-(--primary-color) min-h-screen p-8 flex items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12">
        <div className="flex-1 flex flex-col justify-center gap-6 text-center md:text-left">
          <Title
            variant="secondary"
            text=" Atividades que transformam seu treino"
          />

          <Text
            pColor="text-(--secondary-color)"
            spanColor="text-white"
            before="Na "
            textSpan="Technology Gym"
            after=", unimos inovação e movimento para oferecer uma experiência única de treino. Nossa academia tecnológica e inovadora foi pensada para quem busca saúde, bem-estar e performance em um só lugar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
            {activities.map((activity) => (
              <BulletItem key={activity} name={activity} />
            ))}
          </div>

          <Button text="MATRICULE-SE" variant="secondary" />
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Carrosel images={images} interval={3000} />
        </div>
      </div>
    </section>
  );
}
