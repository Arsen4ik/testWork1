import React from "react";
import "./Page1.css";
import NextPage from "../components/NextPage";
import PulsatingCircle from "../components/PulsatingCircle";

const Page1 = () => {
  const style = {
    transform: "translate3d(0, 0px, 1px)",
    transition: "0.5s"
  };
  return (
    <div className="page-view1">
      <div className="main-text">
        Всегда ли цели терапии СД2
        <br />
        на поверхности?
      </div>
      <PulsatingCircle
        style={style}
        diameter="52"
        text="Цель по HbA1c"
        left="562"
        top="262"
        textTop="14"
        textLeft="64"
      />
      <PulsatingCircle
        style={style}
        diameter="27"
        text="Гипогликемия"
        left="274"
        top="428"
        textTop="-35"
        textLeft="-50"
      />
      <PulsatingCircle
        style={style}
        diameter="16"
        text="Осложнения СД"
        left="480"
        top="539"
        textTop="-34"
        textLeft="-110"
      />
      <PulsatingCircle
        style={style}
        diameter="16"
        text="СС риски"
        left="823"
        top="517"
        textTop="-32"
        textLeft="-31"
      />
      <NextPage />
    </div>
  );
};

export default Page1;
