import { getPosts } from "@/helpers/getPosts";

import s from "./page.module.css";

type PostPage = Promise<{ id: string }>;

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts = await getPosts();
  return posts.map(({ id }) => ({ id: id.toString() }));
}

export default async function Post(props: { params: PostPage }) {
  const params = await props.params;
  const post = await getPosts(params.id);

  return (
    <div className={s.page}>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}
