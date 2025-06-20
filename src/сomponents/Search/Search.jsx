import { useRef } from "react";

import styles from "./search.module.css";

import Sorting from "../Sorting/Sorting.jsx";

const Search = ({ setSortingName, setHeadline }) => {
  const inputRef = useRef();

  return (
    <div className={styles["search-container"]}>
      <input placeholder="Поиск" type="search" ref={inputRef} />
      <button
        className={`${styles["btn"]} ${styles["btn-search"]}`}
        onClick={() => {
          const inputText = inputRef.current.value.trim().toLowerCase();
          if (inputText !== "") setHeadline(`Результат поиска: "${inputText}"`);
        }}
      >
        Найти
      </button>
      <Sorting setSortingName={setSortingName} />
    </div>
  );
};

export default Search;
