import styles from "./book.module.css";

import HeartSvg from "../../assets/svg/HeartSvg/HeartSvg.jsx";

const Book = ({ book }) => {
  return (
    <div className={styles["book-container"]}>
      <div className={styles["image-container"]}>
        <img src={book.cover} alt="" />
        <HeartSvg id={book.id} />
      </div>
      <span className={styles.bookName}>{book.name}</span>
      <br />
      <span className={styles["authorName"]}>{book.author}</span>
      <br />
      <span className={styles["genre"]}>{book.genres[0]}</span>
    </div>
  );
};

export default Book;
