import { FieldError, Merge } from "react-hook-form";

export interface SelectProps {
  label?: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  list: Array<{ value: string; name: string }>;
  selected?: string;
  onChange: (val: string[]) => void;
  className?: string;
}
