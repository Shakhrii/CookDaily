import { NavLink } from 'react-router';
import cls from './Menu.module.css';

type MenuItem = {
  to: string;
  label: string;
};

const items: MenuItem[] = [
  { to: "/recipes", label: "Рецепты" },
  { to: "/favorites", label: "Избранное" },
];

export default function Menu() {
  return (
    <nav className={cls.nav}>
      <ul className={cls.menu}>
        {items.map((item) => <li key={item.to}>
          <NavLink to={item.to} className={({ isActive }) => isActive ? `${cls.link} ${cls.isActive}` : cls.link }>
            {item.label}
          </NavLink>
        </li>)}
      </ul>
    </nav>
  )
}