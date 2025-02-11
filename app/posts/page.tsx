import { CardAnimate } from "@/components";
import styles from "./page.module.css";
import { getPosts } from "@/helpers/getPosts";
import { notFound } from "next/navigation";

export default async function Post() {
  const posts = await getPosts();

  if (!posts) return notFound();

  return <CardAnimate className={styles.page} posts={posts} />;
}
