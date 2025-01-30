import { Info, LikeButton } from "@/components";
import { PostType } from "@/interfaces/post";
import Image from "next/image";
import img from "@/public/image.webp";
import s from "./PageComponent.module.css";
export const PageComponent = ({ title, body }: PostType) => {
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
    </div>
  );
};
