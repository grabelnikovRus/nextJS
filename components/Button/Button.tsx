import { ButtonProps } from "./types";
import Arrow from "./arrow.svg";
import cn from "classnames";

import s from "./Button.module.css";

export const Button = ({ isArrow, className, children }: ButtonProps) => {
  return (
    <button className={cn(s.btn, className)}>
      {children}
      {isArrow && <Arrow />}
    </button>
  );
};
