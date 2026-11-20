import cls from './LogoutButton.module.css'
import { logout } from '@/store/slices/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { useNavigate } from 'react-router';

export default function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  }
  return <button className={cls.logout} onClick={() => handleClick()}>Выйти</button>
}
