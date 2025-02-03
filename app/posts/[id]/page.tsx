import { getComments } from "@/helpers/getComments";
import { getPosts } from "@/helpers/getPosts";
import { PageComponent } from "@/page-components";

type PostPage = Promise<{ id: string }>;

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts = await getPosts();
  return posts.map(({ id }) => ({ id: id.toString() }));
}

export default async function Post(props: { params: PostPage }) {
  const params = await props.params;
  const post = await getPosts(params.id);
  const comments = await getComments(params.id);

  return <PageComponent {...post} comments={comments} />;
}
