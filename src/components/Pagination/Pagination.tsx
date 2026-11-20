import cls from "./Pagination.module.css";

export default function Pagination() {
  return (
    <ul className={cls.pagination}>
      <li>
        <button className={`${cls.left} ${cls.paginationItem}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </li>
      <li>
        <button className={cls.paginationItem}>1</button>
      </li>
      <li>
        <button className={`${cls.paginationItem} ${cls.active}`}>2</button>
      </li>
      <li>
        <button className={cls.paginationItem}>3</button>
      </li>
      <li>
        <div className={cls.empty}>...</div>
      </li>
      <li>
        <button className={cls.paginationItem}>9</button>
      </li>
      <li>
        <button className={`${cls.right} ${cls.paginationItem}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </li>
    </ul>
  );
}
