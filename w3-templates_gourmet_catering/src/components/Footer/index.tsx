import clsx from "clsx";
import React from "react";
import style from "./footer.module.scss";
interface Props {
  desc: string;
}
const Footer: React.FC<Props> = ({ desc }) => {
  return (
    <div className={clsx(style.footer)}>
      <p className={clsx(style.desc)}>{desc}</p>
    </div>
  );
};
export default Footer;
