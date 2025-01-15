import { CardProps } from "./types";
import { Button, Like } from "@/components";
import Image from "next/image";
import s from "./Card.module.css";

export const Card = ({
  img,
  theme,
  term,
  likeCount,
  title,
  description,
}: CardProps) => {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <Image height={193} width={300} src={img} alt="photo" />
      </div>
      <div className={s.content}>
        <span className={s.theme}>{theme}</span>
        <span className={s.term}>{term}</span>
        <Like className={s.like} likeCount={likeCount} />
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.footer}>
        <span className={s.time}>3 минуты</span>
        <Button isArrow>Читать</Button>
      </div>
    </div>
  );
};
