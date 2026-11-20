import { useSelector } from "react-redux";
import cls from "./UserInfo.module.css";
import { selectUser } from "@/store/slices/authSlice";

export default function UserInfo() {
  const user = useSelector(selectUser);
  
  return (
    <div className={cls.user}>
      <img src={user?.image} alt="user photo" className={cls.avatar} />
      <span
        className={cls.username}
      >{`${user?.firstName} ${user?.lastName.slice(0, 1)}.`}</span>
    </div>
  );
}
