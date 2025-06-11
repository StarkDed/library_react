import "./BookList.css";
import { useState } from "react";

const BookList = ({ listBooks }) => {
  const [headline, setHeadline] = useState("Лучшие книги");

  return (
    <div className="book-list-wrapper">
      <h2>{headline}</h2>
      <div className="book-list"></div>
    </div>
  );
};

export default BookList;
