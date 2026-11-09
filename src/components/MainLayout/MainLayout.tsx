import cls from './MainLayout.module.css';
import { Loader } from '../Loader';
import { Suspense } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router';

function MainLayout() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={cls.mainLayout}>
        <Header />
        <div className={cls.mainWrapper}>
          <main className={cls.main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <footer className={cls.footer}>
            CookDaily Application | {currentYear} <br /> by Shakhri Ramaldanova
          </footer>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
