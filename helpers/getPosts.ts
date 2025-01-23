import { PostType } from "@/interfaces/post";

export const getPosts = async (): Promise<PostType[] | null> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");

  if (!res.ok) return null;

  return res.json();
};
