import { Like } from "../Like/Like";
import { InfoProps } from "./types";

import s from "./Info.module.css";

export const Info = ({ likeCount, theme, date, time }: InfoProps) => (
  <div className={s.root}>
    <div>{theme}</div>
    <div>{date}</div>
    <div>{`${time} минуты`}</div>
    <Like likeCount={likeCount} />
  </div>
);
