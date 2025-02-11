import { Info, LikeButton, Comment, Forms } from "@/components";
import { PageComponentProps } from "./types";
import Image from "next/image";
import img from "@/public/image.webp";

import s from "./PageComponent.module.css";

export const PageComponent = ({
  title,
  body,
  comments,
}: PageComponentProps) => {
  return (
    <div className={s.root}>
      <h2 className={s.title}>{title}</h2>
      <Info likeCount={5} time={3} theme="Front-end" date="1 месяц назад" />
      <Image height={440} width={700} src={img} alt="photo" />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div className={s.like}>
        Понравилось? Жми
        <LikeButton />
      </div>
      <div className={s.comments}>
        <h3>Комментарии</h3>
        {comments.map(({ ...props }) => (
          <Comment key={props.id} {...props} />
        ))}
      </div>
      <Forms />
    </div>
  );
};
