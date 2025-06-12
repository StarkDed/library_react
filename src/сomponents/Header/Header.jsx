import styles from "./header.module.css";
import Search from "../Search/Search.jsx";
import AuthButton from "../AuthButton/AuthButton.jsx";

const Header = ({ toggleCatalogVisibility, setHeadline }) => {
  return (
    <header>
      <div className={styles["header-content"]}>
        <h1 onClick={() => setHeadline("Лучшие книги")}>Library</h1>
        <button
          className={styles["btn-catalog"]}
          onClick={() => toggleCatalogVisibility()}
        >
          Каталог
        </button>
        <Search />
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
