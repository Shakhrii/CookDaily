import { useLoginMutation } from '@/api/authApi';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';
import {useState} from 'react';
import { useNavigate } from 'react-router';
import type {SubmitEvent } from 'react';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [ login, { isLoading, error }] = useLoginMutation()
  const dispatch = useAppDispatch();
  

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login({ username, password }).unwrap();
      dispatch(setCredentials(data));
      } catch {}
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Имя пользователя</label>
      <input type="text" id="username" name="username" value={username}
          onChange={(e) => setUsername(e.target.value)} required />
      <label htmlFor="password">Пароль</label>
      <input type="password" id="password" name="password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" disabled={isLoading}>Войти</button>
      {error && <div>Ошибка</div>}
    </form>
  )
}