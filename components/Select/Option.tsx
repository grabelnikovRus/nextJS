import cn from "classnames";

import s from "./Select.module.css";

export const Option = ({
  value,
  name,
  arrValues,
  onChange,
}: {
  value: string;
  name: string;
  arrValues: string[];
  onChange: (value: string[]) => void;
}) => {
  const isActive = arrValues.includes(value);

  const onClickOption = () => {
    let arr: string[];

    if (isActive) {
      arr = arrValues.filter((item) => item !== value);
    } else {
      arr = [...arrValues, value];
    }
    onChange(arr);
  };

  return (
    <div
      className={cn(s.option, { [s.option__active]: isActive })}
      onClick={onClickOption}
    >
      <div className={s.box} />
      <option value={value}>{name}</option>
    </div>
  );
};
