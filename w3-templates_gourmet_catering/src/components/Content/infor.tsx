import clsx from "clsx";
import React from "react";
import style from "./content.module.scss";

interface Props {
  title: string;
  desc: string;
  content: string;
  img: string;
}
const Infor: React.FC<Props> = ({ content, desc, title, img }) => {
  return (
    <div className={clsx(style.InfoWrapper)}>
      <div className={clsx("row")}>
        <div className={clsx("col", "col2")}>
          <img src={require("./img/tablesetting2.jpg")} alt="" width="100%" />
        </div>
        <div className={clsx("col", "col2")}>
          <p className={clsx(style.title)}> {title} </p>
          <p className={clsx(style.desc)}> {desc} </p>
          <div className={clsx(style.detail)}> {content} </div>
        </div>
      </div>
    </div>
  );
};
export default Infor;
