import { TextareaProps } from "./types";
import s from "./Textarea.module.css";

export const Textarea = ({ label, ...props }: TextareaProps) => {
  return (
    <label className={s.label}>
      <span>{label}</span>
      <textarea className={s.input} {...props} />
    </label>
  );
};
