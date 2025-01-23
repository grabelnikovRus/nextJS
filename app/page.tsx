import { Card } from "@/components";
import styles from "./page.module.css";
import { getPosts } from "@/helpers/getPosts";
import { notFound } from "next/navigation";
import { Wrapper } from "@/components/Wrapper/Wrapper";

export default async function Home() {
  const post = await getPosts();

  if (!post) return notFound();

  return (
    <div className={styles.page}>
      {post.map(({ title, body, id }) => (
        <Card
          likeCount={4}
          img="/card-image.png"
          description={body}
          title={title}
          theme="Front-end"
          term="1 месяц назад"
          key={id}
        />
      ))}
      <Wrapper />
    </div>
  );
}
