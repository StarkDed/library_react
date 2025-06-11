import styles from "./header.module.css";
import Search from "../Search/Search.jsx";

const Header = () => {
  return (
    <header>
      <div className={styles["header-content"]}>
        <h1>Library</h1>
        <button className={styles["btn-catalog"]}>Каталог</button>
        <Search />
        <button className={styles["btn-login"]}>Войти</button>
      </div>
    </header>
  );
};

export default Header;
