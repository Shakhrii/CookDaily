import { useLoginMutation } from "@/api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import { FormSchema } from "@/schema/schema";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import cls from "./LoginForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button";
import { getErrorMessage } from "@/utils/getErrorMessage";

type FormSchema = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const [login, { isLoading, error }] = useLoginMutation();
  const errorMessage = getErrorMessage(error, {
    400: "Неверный логин или пароль",
  });

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<FormSchema>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
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
          aria-invalid={errors.username ? "true" : "false"}
        />

        <span role="alert" className={cls.error}>
          {errors.username?.message}
        </span>
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
          aria-invalid={errors.password ? "true" : "false"}
        />

        <span role="alert" className={cls.error}>
          {errors.password?.message}
        </span>
      </div>
      <span role="alert" className={`${cls.error} ${cls.errorLogin}`}>
        {errorMessage}
      </span>

      <Button type="submit" disabled={!isDirty || isSubmitting || isLoading}>
        Войти
      </Button>
    </form>
  );
}
