import clsx from "clsx";
import React from "react";
import style from "./content.module.scss";

type House = {
  name: string;
  img: string;
};
interface Props {
  houses: House[];
}
const HouseTemplate: React.FC<Props> = ({ houses }) => {
  return (
    <div className={clsx(style.houseContainer)}>
      {houses.map((house) => {
        return (
          <div className={clsx(style.houseItem)}>
            <p>{house.name}</p>
            <img src={house.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
};
export default HouseTemplate;
