import { ReactNode } from 'react';
import cls from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  handler?: () => void;
}

export default function Button({ children, type, disabled, handler }: ButtonProps) {
  return <button className={cls.button} type={type} disabled={disabled} onClick={handler}>{children}</button>
}