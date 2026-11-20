import { Link } from "react-router";
import Menu from "../Menu/Menu";
import cls from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices/authSlice";
import { UserInfo } from "../UserInfo";
import { LogoutButton } from "../LogoutButton";

export default function Header() {
  return (
    <div className={cls.wrapper}>
      <header className={cls.header}>
        <Link className={cls.link} to="/">
          <div className={cls.logo}>CookDaily</div>
        </Link>
        <Menu />
        <div className={cls.userInfo}>
          <UserInfo />
          <LogoutButton />
        </div>
      </header>
    </div>
  );
}
