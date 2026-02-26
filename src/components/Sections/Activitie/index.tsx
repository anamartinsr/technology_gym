import Button from "../../ui/Button";
import Carrosel from "../../ui/Carrosel";
import Text from "../../common/Text";
import Title from "../../common/Title";
import BulletItem from "./BulletItem";
import activities from "../../../data/activities";

export default function Activitie() {
  return (
    <section
      id="activitie"
      className="bg-(--primary-color) p-8 flex items-center"
    >
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12">
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
              <BulletItem key={activity.value} name={activity.value} />
            ))}
          </div>

          <Button text="MATRICULE-SE" variant="secondary" to="/enrollment" />
        </div>

        <div className="w-full flex-1 flex justify-center md:justify-end">
          <Carrosel images={activities} interval={3000} />
        </div>
      </div>
    </section>
  );
}
