import styles from "./search.module.css";

import Sorting from "../Sorting/Sorting.jsx";

const Search = ({ setSortingName }) => {
  return (
    <div className={styles["search-container"]}>
      <input placeholder="Поиск" type="search" />
      <button className={`${styles["btn"]} ${styles["btn-search"]}`}>
        Найти
      </button>
      <Sorting setSortingName={setSortingName} />
    </div>
  );
};

export default Search;
