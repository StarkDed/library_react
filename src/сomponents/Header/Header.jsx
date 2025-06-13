import styles from "./header.module.css";
import Search from "../Search/Search.jsx";
import AuthButton from "../AuthButton/AuthButton.jsx";

const Header = ({ setSortingName }) => {
  return (
    <header>
      <div className={styles["header-content"]}>
        <h1>Library</h1>
        <button className={styles["btn-catalog"]}>Каталог</button>
        <Search setSortingName={setSortingName} />
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
