import { LikeProps } from "./types";
import Hand from "./hand.svg";
import cn from "classnames";

import s from "./Like.module.css";

export const Like = ({ likeCount, className, ...props }: LikeProps) => {
  return (
    <div className={cn(s.root, className)} {...props}>
      {likeCount}
      <Hand />
    </div>
  );
};
