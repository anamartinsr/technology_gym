import Text from "../components/common/Text";
import Title from "../components/common/Title";
import EnrollmentForm from "../components/form/EnrollmentForm";
import Layout from "../components/layout/Layout";

import HomeImg from "../assets/home.png";

export default function Enrollment() {
  return (
    <>
      <section className=" bg-black p-8">
        <div className="flex flex-col">
          <div className="relative w-full md:h-80 h-screen">
            <img
              src={HomeImg}
              alt="home"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/4 md:top-1/3 left-6 md:left-16 flex flex-col items-start md:items-start text-white max-w-xl">
              <Title variant="primary" text="Technology Gym" />

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
