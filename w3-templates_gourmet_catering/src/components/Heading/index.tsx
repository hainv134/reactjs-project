import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";
interface Props {
  title: string;
  list: string[];
}
const Heading: React.FC<Props> = ({ title, list }) => {
  return (
    <div className="top">
      <div className={clsx(style.header)}>
        <a href="#." className={clsx(style.title)}>
          {title}
        </a>
        <div className={clsx(style.nav)}>
          {list.map((item) => {
            return (
              <a href="." key={item}>
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Heading;
