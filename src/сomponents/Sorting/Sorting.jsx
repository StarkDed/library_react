import { useState } from "react";

import styles from "./sorting.module.css";

import SortingSvg from "../../assets/svg/SortingSvg/SortingSvg.jsx";

const Sorting = () => {
  const [listSortingName, setSortingName] = useState([
    { id: 1, name: "По названию" },
    { id: 2, name: "По автору" },
  ]);

  const [isSortingOpen, setIsSortingOpen] = useState(false);

  return (
    <div className={styles["sorting-wrapper"]}>
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
