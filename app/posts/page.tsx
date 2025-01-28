import { Card } from "@/components";
import styles from "./page.module.css";
import { getPosts } from "@/helpers/getPosts";
import { notFound } from "next/navigation";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default async function Post() {
  const posts = await getPosts();

  if (!posts) return notFound();

  return (
    <div className={styles.page}>
      {posts.map(({ title, body, id }) => (
        <Card
          likeCount={4}
          img="/card-image.png"
          description={body}
          title={title}
          theme="Front-end"
          term="1 месяц назад"
          key={id}
          id={id.toString()}
        />
      ))}
      <Wrapper />
    </div>
  );
}
