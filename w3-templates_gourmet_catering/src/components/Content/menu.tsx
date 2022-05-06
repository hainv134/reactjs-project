import clsx from "clsx";
import React from "react";
import style from "./content.module.scss";

type menuItem = {
  name: string;
  desc: string;
};
interface Props {
  menus: menuItem[];
  img: string;
}
const Menu: React.FC<Props> = ({ img, menus }) => {
  return (
    <div className={clsx(style.menuWrapper)}>
      <div className={clsx("row")}>
        <div className={clsx("col", "col2")}>
          <h2 className={clsx(style.title)}>Our Menu</h2>
          {menus.map((menu) => {
            return (
              <div className={clsx(style.item)}>
                <h4 className={clsx(style.name)}> {menu.name}</h4>
                <p className={clsx(style.desc)}> {menu.desc} </p>
              </div>
            );
          })}
        </div>
        <div className={clsx("col", "col2")}>
          <img src={require("./img/tablesetting.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
