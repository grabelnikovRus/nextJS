import { CommentType } from "@/interfaces/comment";

export const getComments = async (id?: string): Promise<CommentType[]> => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DOMAIN + `/comments?postId=${id}`
  );

  return res.json();
};
