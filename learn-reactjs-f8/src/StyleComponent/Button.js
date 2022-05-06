import style from "./style.module.css";
import clsx from "clsx";

function Button() {
  return (
    <>
      <button
        className={clsx(style.btn, {
          [style.active]: true,
        })}
      >
        Click me
      </button>
    </>
  );
}

export default Button;
