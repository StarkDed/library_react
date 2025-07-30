import styles from "./BookList.module.css";
import { useState } from "react";

const BookList = ({ listBooks }) => {
  const [headline, setHeadline] = useState("Лучшие книги");

  return (
    <div className={styles["book-list-wrapper"]}>
      <h2>{headline}</h2>
      <div className={styles["book-list"]}></div>
    </div>
  );
};

export default BookList;
