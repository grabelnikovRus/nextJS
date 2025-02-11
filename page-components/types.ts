import { CommentType } from "@/interfaces/comment";
import { PostType } from "@/interfaces/post";

export type PageComponentProps = PostType & { comments: CommentType[] };
