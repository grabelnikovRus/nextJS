"use client";
import { PostType } from "@/interfaces/post";
import { Wrapper } from "../Wrapper/Wrapper";
import { Card } from "../Card/Card";
import { motion, Variants } from "framer-motion";

const draw: Variants = {
  hidden: { opacity: 0, x: [0] },
  visible: (i: number) => {
    const delay = i * 0.2;
    return {
      opacity: 1,
      x: [950, 0],
      transition: {
        opacity: { delay, duration: 0.1 },
        x: { delay, duration: 0.1 },
      },
    };
  },
};

export const CardAnimate = ({
  posts,
  className,
}: {
  posts: PostType[];
  className: string;
}) => {
  return (
    <motion.div className={className} initial="hidden" animate="visible">
      {posts.map(({ title, body, id }, i) => (
        <Card
          likeCount={4}
          img="/card-image.png"
          description={body}
          title={title}
          theme="Front-end"
          term="1 месяц назад"
          key={id}
          draw={draw}
          id={id.toString()}
          index={i}
        />
      ))}
      <Wrapper />
    </motion.div>
  );
};
