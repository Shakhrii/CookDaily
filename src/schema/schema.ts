import * as z from "zod";

export const FormSchema = z.object({
  username: z.string()
  .min(2, 'Имя пользователя слишком короткое'),
  password: z.string()
  .min(6, 'Пароль слишком короткий')
});
