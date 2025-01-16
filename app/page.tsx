"use client";
import { Card, LikeButton } from "@/components";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const obj = {
  img: "/card-image.png",
  desc: "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..",
  title: "Как работать с CSS Grid",
  theme: "Front-end",
  term: "1 месяц назад",
};

export default function Home() {
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    async function setPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({ isLike }),
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.json();
    }
    // корсы вызывают ошибку
    setPosts().then(console.log);
  }, [isLike]);

  return (
    <div className={styles.page}>
      <Card
        likeCount={4}
        img={obj.img}
        description={obj.desc}
        title={obj.title}
        theme={obj.theme}
        term={obj.term}
      />
      <LikeButton isLike={isLike} setIsLike={setIsLike} />
    </div>
  );
}
