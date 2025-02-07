import { SelectProps } from "./types";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Option } from "./Option";
import Arrow from "./arrow.svg";
import cn from "classnames";

import s from "./Select.module.css";

export const Select = ({
  label,
  list,
  selected,
  className,
  error,
  onChange,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(selected ? [selected] : []);
  const id = useId();
  const listRef = useRef<HTMLDivElement | null>(null);
  const node = useRef<Element | null>(null);
console.log(error)
  const onClickGlobal = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;

      if ((target as HTMLElement).id === id) {
        setIsOpen((prev) => !prev);
        return;
      }

      if (node.current && node.current.contains(target)) {
        setIsOpen(true);
        return;
      }

      if (listRef.current && !listRef.current.contains(target)) {
        setIsOpen(false);
      }
    },
    [id],
  );

  const ListNode = (
    <div className={s.options} ref={listRef}>
      {list.map(({ value: val, name }) => (
        <Option
          value={val}
          arrValues={value}
          name={name}
          onChange={setValue}
          key={val}
        />
      ))}
    </div>
  );

  useEffect(() => {
    const idNode = document.getElementById(id);

    if (idNode) node.current = idNode;

    document.addEventListener("click", onClickGlobal);

    return function () {
      document.removeEventListener("click", onClickGlobal);
    };
  }, [id, onClickGlobal]);

  useEffect(() => {
    onChange(value);
  }, [value.length]);

  return (
    <div className={cn(s.root, className)} {...props}>
      {label && <label htmlFor={id}>{label}</label>}
      <div id={id} className={cn(s.select, { [s.select__error]: error })}>
        {value.join(", ")}
        <Arrow className={cn(s.arrow, { [s.arrow__rotate]: isOpen })} />
        {error && <span className={s.error}>{error.message}</span>}
      </div>
      {isOpen && node.current && createPortal(ListNode, node.current)}
    </div>
  );
};
