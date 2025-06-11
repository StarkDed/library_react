import { useState } from "react";

import "./app.css";
import Header from "../Header/Header.jsx";
import BookList from "../BookList/BookList.jsx";
import Footer from "../Footer/Footer.jsx";

const App = () => {
  const [listBooks, setListBooks] = useState([]);

  return (
    <div className="app">
      <Header />
      <BookList listBooks={listBooks} />
      <Footer></Footer>
    </div>
  );
};

export default App;
