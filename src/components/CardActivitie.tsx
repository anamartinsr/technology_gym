import React from "react";
import Yoga from "/yoga.jpg";
import Crossfit from "/crossfit.jpg";
import Zumba from "/zumba.jpg";
import ItemActivite from "./ItemActivite";

const CardActivitie: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-8 p-4">
        <ItemActivite src={Yoga} alt="Yoga" title="Yoga" />
        <ItemActivite src={Zumba} alt="Zumba" title="Zumba" />
        <ItemActivite src={Crossfit} alt="Crossfit" title="Crossfit" />
      </div>
    </div>
  );
};

export default CardActivitie;
