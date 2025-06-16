import { useState, useEffect, useRef } from "react";

import styles from "./sorting.module.css";

import SortingSvg from "../../assets/svg/SortingSvg/SortingSvg.jsx";

const Sorting = ({ setSortingName }) => {
  const [listSortingName, setListSortingName] = useState([
    { id: 1, name: "По названию" },
    { id: 2, name: "По автору" },
  ]);

  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const wrapperRef = useRef(null);

  // click handler outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSortingOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsSortingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortingOpen]);

  return (
    <div className={styles["sorting-wrapper"]} ref={wrapperRef}>
      <SortingSvg onClick={() => setIsSortingOpen((prev) => !prev)} />
      <div
        className={styles["sorting-container"]}
        style={{ display: isSortingOpen ? "block" : "none" }}
      >
        <h4 className={styles.title}>Сортировка</h4>
        <div className={styles["sorting-list"]}>
          {listSortingName.map((el) => (
            <div className={styles.radioLabelContainer} key={el.id}>
              <input
                name="sorting"
                id={"sorting" + el.id}
                className={styles["input-radio"]}
                type="radio"
                onClick={() => setSortingName(el.name)}
              />
              <label
                htmlFor={"sorting" + el.id}
                style={{ fontSize: "1em", cursor: "pointer" }}
              >
                {el.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
