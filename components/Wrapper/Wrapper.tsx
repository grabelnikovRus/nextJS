"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

export const Wrapper = () => {
  const { setHref } = useContext(AppContext);

  useEffect(() => {
    setHref?.("https://github.com/grabelnikovRus/nextJS");
  }, [setHref]);

  return <span />;
};
