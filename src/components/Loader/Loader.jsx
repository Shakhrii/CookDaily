import cls from './Loader.module.css';

export function Loader() {
  return (
    <div className={cls.backdrop}>
      <span className={cls.loader}></span>
    </div>
  );
}
export function SmallLoader() {
  return <span className={cls.smallLoader}></span>;
}
