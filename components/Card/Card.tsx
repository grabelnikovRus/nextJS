import { CardProps } from "./types";
import { Button, Like } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import s from "./Card.module.css";

export const Card = ({
  img,
  theme,
  term,
  likeCount,
  title,
  description,
  id,
  draw,
  index,
}: CardProps) => {
  return (
    <motion.div className={s.card} variants={draw} custom={index}>
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
        <Button href={`/posts/${id}`} isArrow>
          Читать
        </Button>
      </div>
    </motion.div>
  );
};
