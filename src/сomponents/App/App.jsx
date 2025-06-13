import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Header from "../Header/Header.jsx";
import BookList from "../BookList/BookList.jsx";
import Footer from "../Footer/Footer.jsx";
import Auth from "../Auth/Auth.jsx";

const App = () => {
  const [listBooks, setListBooks] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<BookList listBooks={listBooks} />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
