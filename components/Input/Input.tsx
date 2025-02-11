import { InputProps } from "./types";
import cn from "classnames";
import s from "./Input.module.css";

export const Input = ({ label, className, error, ...props }: InputProps) => {
  return (
    <label className={cn(s.label, className)}>
      <span>{label}</span>
      <input className={cn(s.input, { [s.input__error]: error })} {...props} />
      {error && <div className={s.error}>{error.message}</div>}
    </label>
  );
};
