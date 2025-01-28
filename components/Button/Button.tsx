import { ButtonProps } from "./types";
import Arrow from "./arrow.svg";
import cn from "classnames";

import s from "./Button.module.css";
import Link from "next/link";

export const Button = ({
  isArrow,
  className,
  href,
  children,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={cn(s.btn, className)}>
        {children}
        {isArrow && <Arrow />}
      </Link>
    );
  }

  return (
    <button className={cn(s.btn, className)} {...props}>
      {children}
      {isArrow && <Arrow />}
    </button>
  );
};
