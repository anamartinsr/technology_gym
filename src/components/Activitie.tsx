import React from "react";
import Yoga from "/yoga.jpg";
import Crossfit from "/crossfit.jpg";
import Zumba from "/zumba.jpg";
import CardActivite from "./CardActivitie";

const Activitie: React.FC = () => {
  return (
    <div className="bg-[#9cff1e]">
      <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-8 p-4">
        <CardActivite src={Yoga} alt="Yoga" title="Yoga" />
        <CardActivite src={Zumba} alt="Zumba" title="Zumba" />
        <CardActivite src={Crossfit} alt="Crossfit" title="Crossfit" />
      </div>
    </div>
  );
};

export default Activitie;
