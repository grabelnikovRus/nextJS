import Link from "next/link";
import Icon from "./github.svg";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1>Мой блог</h1>
      <Link href="https://github.com/grabelnikovRus/nextJS">
        <Icon />
      </Link>
    </header>
  );
};
