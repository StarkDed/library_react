import { useState } from "react";

import styles from "./BookList.module.css";

import Book from "../Book/Book.jsx";

const BookList = ({ listBooks }) => {
  const [headline, setHeadline] = useState("Лучшие книги");

  return (
    <div className={styles["book-list-wrapper"]}>
      <h2>{headline}</h2>
      <div className={styles["book-list"]}>
        {listBooks.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
