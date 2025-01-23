"use client";
import {
  createContext,
  Dispatch,
  JSX,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const AppContext = createContext<{
  href: string | null;
  setHref?: Dispatch<SetStateAction<string | null>>;
}>({
  href: null,
});

export const AppContextProveder = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [href, setHref] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ href, setHref }}>
      {children}
    </AppContext.Provider>
  );
};
