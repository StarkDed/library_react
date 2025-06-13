import styles from "./search.module.css";

import Sorting from "../Sorting/Sorting.jsx";

const Search = () => {
  return (
    <div className={styles["search-container"]}>
      <input placeholder="Поиск" type="search" />
      <button className={styles["btn-search"]}>Найти</button>
      <Sorting />
    </div>
  );
};

export default Search;
