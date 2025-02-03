import Link from "next/link";

export default function Main() {
  return (
    <>
      Главная <Link href="/posts">Перейти к постам</Link>
    </>
  );
}
