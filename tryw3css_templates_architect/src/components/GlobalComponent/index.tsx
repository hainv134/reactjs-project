import React from "react";
import "./global.scss";
interface Props {
  children: JSX.Element;
}
const GlobalComponent: React.FC<Props> = ({ children }) => {
  return children;
};
export default GlobalComponent;
