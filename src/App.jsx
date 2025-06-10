import { useState } from "react";

import "./styles/app.css";
import Header from "./сomponents/Header.jsx";
import BookList from "./сomponents/BookList.jsx";
import Footer from "./сomponents/Footer.jsx";

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
