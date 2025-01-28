"use client";
import Link from "next/link";
import Icon from "./github.svg";
import s from "./Header.module.css";
import { useContext } from "react";
import { AppContext } from "@/components";

export const Header = () => {
  const { href } = useContext(AppContext);

  return (
    <header className={s.header}>
      <Link href="/">
        <h1>Мой блог</h1>
      </Link>
      <Link href={href ?? "/"}>
        <Icon />
      </Link>
    </header>
  );
};
