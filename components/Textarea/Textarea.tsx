import { TextareaProps } from "./types";
import s from "./Textarea.module.css";

export const Textarea = ({ label, error, ...props }: TextareaProps) => {
  return (
    <label className={s.label}>
      <span>{label}</span>
      <textarea className={s.input} {...props} />
      {error && (
        <span role="log" className={s.error}>
          {error.message}
        </span>
      )}
    </label>
  );
};
