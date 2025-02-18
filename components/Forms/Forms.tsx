"use client";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { FormsStateType } from "./types";
import { Textarea } from "../Textarea/Textarea";
import { Select } from "../Select/Select";
import { list } from "./data";

import s from "./Forms.module.css";

export const Forms = () => {
  const {
    handleSubmit,
    register,
    clearErrors,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormsStateType>();

  const onSubmit = (data: FormsStateType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Input
        label="Имя"
        placeholder="Введите имя"
        error={errors.name}
        className={s.input}
        {...register("name", {
          required: { value: true, message: "Введите ваше имя" },
        })}
      />
      <Controller
        name="variant"
        render={({ field }) => (
          <Select
            list={list}
            label="Тема"
            onChange={field.onChange}
            error={errors.variant}
          />
        )}
        rules={{
          validate: (a) => {
            if (a.length <= 2) return "Выберите более двух вариантов";

            return true;
          },
        }}
        control={control}
      />
      <Textarea
        label="Отзыв"
        placeholder="Введите отзыв"
        error={errors.text}
        {...register("text", {
          required: { value: true, message: "Введите текст отзыва" },
        })}
      />
      <Button type="submit" className={s.btn} onClick={() => clearErrors()}>
        Отправить
      </Button>
      {isSubmitSuccessful && <div role="alert">Отзыв успешно отправлен</div>}
    </form>
  );
};
