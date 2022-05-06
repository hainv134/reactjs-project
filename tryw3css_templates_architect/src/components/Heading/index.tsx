import clsx from "clsx";
import React from "react";
import style from "./heading.module.scss";
interface Props {
  title: string;
  nav: string[];
}
const Heading: React.FC<Props> = ({ nav, title }) => {
  return (
    <div className={clsx(style.heading)}>
      <div className={clsx(style.title, style.button)}>
        <b> {title.split(" ")[0]} </b>
        {title.split(" ")[1]}
      </div>
      <div className={clsx(style.nav)}>
        {nav.map((n) => {
          return (
            <a href="." className={clsx(style.button)}>
              {n}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Heading;
