import { Card } from "@/components/Card/Card";
import styles from "./page.module.css";

const obj = {
  img: "/card-image.png",
  desc: "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..",
  title: "Как работать с CSS Grid",
  theme: "Front-end",
  term: "1 месяц назад",
};

export default function Home() {
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
    </div>
  );
}
