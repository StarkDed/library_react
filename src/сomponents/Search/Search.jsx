import styles from "./search.module.css";
import SortingSvg from "../../assets/svg/SortingSvg/SortingSvg.jsx";

const Search = () => {
  return (
    <div className={styles["search-container"]}>
      <input placeholder="Поиск" type="search" />
      <button className={styles["btn-search"]}>Найти</button>
      <SortingSvg className={styles["sorting-icon"]} />
    </div>
  );
};

export default Search;
