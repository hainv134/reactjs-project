import clsx from "clsx";
import React from "react";
import style from "./slider.module.scss";
interface Props {
  img: string;
  desc: string;
}
const Slider: React.FC<Props> = ({ desc, img }) => {
  return (
    <div className={clsx(style.slider)}>
      <div className={clsx(style.disMiddle)}>
        <h1>
          <span className={clsx(style.descFirst)}>
            <b> {desc.split(" ")[0]} </b>
          </span>
          <span className={clsx(style.descSecond)}>{desc.split(" ")[1]} </span>
        </h1>
      </div>
    </div>
  );
};
export default Slider;
