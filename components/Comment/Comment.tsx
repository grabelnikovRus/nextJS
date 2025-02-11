import { CommentType } from "@/interfaces/comment";

import s from "./Comment.module.css";

export const Comment = ({ name, body, email }: CommentType) => {
  return (
    <div className={s.root}>
      <span className={s.name}>{name}</span>
      <span className={s.email}>{email}</span>
      <span className={s.body}>{body}</span>
    </div>
  );
};
