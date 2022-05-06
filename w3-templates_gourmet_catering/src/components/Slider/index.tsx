import clsx from "clsx";
import React from "react";
import style from "./slider.module.scss";
interface Props {
  title: string;
}
const Slider: React.FC<Props> = ({ title }) => {
  return (
    <div className={clsx(style.slider)}>
      <div className={clsx(style.title)}> {title} </div>
    </div>
  );
};

export default Slider;
