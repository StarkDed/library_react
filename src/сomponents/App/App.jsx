import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Header from "../Header/Header.jsx";
import BookList from "../BookList/BookList.jsx";
import Footer from "../Footer/Footer.jsx";
import Auth from "../Auth/Auth.jsx";

const App = () => {
  const [listBooks, setListBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAuthorized, setIsAuthrized] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Header isAuthorized={isAuthorized} />
        <main>
          <Routes>
            <Route path="/" element={<BookList listBooks={listBooks} />} />
            <Route
              path="/login"
              element={
                <Auth
                  users={users}
                  setUsers={setUsers}
                  setIsAuthrized={setIsAuthrized}
                />
              }
            />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
