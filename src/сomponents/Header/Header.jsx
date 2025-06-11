import styles from "./header.module.css";
import SortingSvg from "../../assets/svg/SortingSvg/SortingSvg.jsx";

const Header = () => {
  return (
    <header>
      <div className={styles["header-content"]}>
        <h1>Library</h1>
        <button className={styles["btn-catalog"]}>Каталог</button>
        <div className={styles["search-container"]}>
          <input placeholder="Поиск" type="search" />
          <button className={styles["btn-search"]}>Найти</button>
          <SortingSvg className={styles["sorting-icon"]} />
        </div>
        <button className={styles["btn-login"]}>Войти</button>
      </div>
    </header>
  );
};

export default Header;
