import { Variants } from "framer-motion";

export interface CardProps {
  img: string;
  theme: string;
  term: string;
  title: string;
  description: string;
  likeCount: number;
  id: string;
  draw: Variants;
  index: number;
}
