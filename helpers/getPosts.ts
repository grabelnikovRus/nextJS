import { PostType } from "@/interfaces/post";

export const getPosts = async <T>(
  id?: T
): Promise<T extends string ? PostType : PostType[]> => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DOMAIN + "/posts/" + (id ?? "")
  );

  return res.json();
};
