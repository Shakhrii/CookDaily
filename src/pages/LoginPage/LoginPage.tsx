import { LoginForm } from "@/components/LoginForm";
import cls from './LoginPage.module.css';

export default function LoginPage() {
  return (
  <div className={cls.wrapper}>
    <div className={cls.section}>
      <div className={cls.loginImage} />
      <div className={cls.form}>
        <div className={cls.logo}>CookDaily</div>
        <h1 className={cls.title}>Что готовим сегодня?</h1>
        <div className={cls.subtitle}>Войдите, чтобы открыть рецепты</div>
        <LoginForm />
      </div>
    </div> 
  </div>
)}