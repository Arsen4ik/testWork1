import React from "react";
import "./PulsatingCircle.css";

const PulsatingCircle = props => {
  const style = {
    top: `${props.top}px`,
    left: `${props.left}px`,
    transform: props.style.transform,
    transition: props.style.transition
  };
  const styleText = {
    top: `${props.textTop}px`,
    left: `${props.textLeft}px`
  };
  const styleMainCircle = {
    width: `${props.diameter}px`,
    height: `${props.diameter}px`
  };
  const styleSubcircle = {
    width: `${Math.ceil(props.diameter / 3)}px`,
    height: `${Math.ceil(props.diameter / 3)}px`,
    top: `${Math.floor(props.diameter / 3)}px`,
    left: `${Math.floor(props.diameter / 3)}px`
  };
  return (
    <div className="pulse-circle" style={style}>
      <div className="pulse-circle-wrap">
        <div className="cirlce-text" style={styleText}>
          {props.text}
        </div>
        <div className="circle-1" style={styleMainCircle}></div>
        <div className="circle-2" style={styleSubcircle}></div>
        <div className="circle-3" style={styleSubcircle}></div>
        <div className="circle-4" style={styleSubcircle}></div>
      </div>
    </div>
  );
};

export default PulsatingCircle;
