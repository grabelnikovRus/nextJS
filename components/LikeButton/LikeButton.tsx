import { LikeButtonProps } from "./types";
import cn from "classnames";
import Hand from "./hand.svg";
import s from "./LikeButton.module.css";

export const LikeButton = ({
  isLike = false,
  className,
  onClick,
  ...props
}: LikeButtonProps) => {
  return (
    <button
      className={cn(s.like, className, { [s["is-like"]]: isLike })}
      onClick={onClick}
      {...props}
    >
      <Hand />
    </button>
  );
};
