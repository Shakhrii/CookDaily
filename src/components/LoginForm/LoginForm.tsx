import { useLoginMutation } from "@/api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import { FormSchema } from "@/schema/schema";
import type { SubmitEvent } from "react";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import cls from "./LoginForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";

type FormSchema = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<FormSchema>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormSchema> =
    (data) => async (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const result = await login(data).unwrap();
        dispatch(setCredentials(result));
      } catch {}
    };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.field}>
        <label className={cls.label} htmlFor="username">
          Логин
        </label>
        <input
          className={cls.input}
          {...register("username")}
          id="username"
          name="username"
          type="text"
          placeholder="username"
          aria-invalid={errors.username ? 'true' : 'false'}
        />
        {errors.username && (
          <span role="alert" className={cls.error}>
            {errors.username?.message}
          </span>
        )}
      </div>
      <div className={cls.field}>
        <label className={cls.label} htmlFor="password">
          Пароль
        </label>
        <input
          className={cls.input}
          {...register("password")}
          id="password"
          name="password"
          type="password"
          placeholder="password"
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && (
          <span role="alert" className={cls.error}>
            {errors.password?.message}
          </span>
        )}
      </div>
      <button type="submit" disabled={!isDirty || isSubmitting || isLoading}>
        Войти
      </button>
      {error && <div>Ошибка</div>}
    </form>
  );
}
