import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Header from "../Header/Header.jsx";
import BookList from "../BookList/BookList.jsx";
import Footer from "../Footer/Footer.jsx";
import Auth from "../Auth/Auth.jsx";

import { sortingBooks } from "./App.js";

const originalListBooks = [
  {
    id: 1,
    name: "Кто вынес приговор",
    author: "Алексей Грачев",
    cover: "/bookCovers/Whopassedtheverdict.jpg",
    genres: ["Детективы"],
  },
  {
    id: 2,
    name: "Дочь таксидермиста",
    author: "Кейт Мосс",
    cover: "/bookCovers/Daughterofataxidermist.jpg",
    genres: ["Детективы", "Исторический детективы", "Триллер"],
  },
  {
    id: 3,
    name: "Карамельные дюны",
    author: "Алина Егорова",
    cover: "/bookCovers/ramelDunes.jpg",
    genres: ["Детективы"],
  },
  {
    id: 4,
    name: "Каюр",
    author: "Андрей Панченко",
    cover: "/bookCovers/Thecabin.jpg",
    genres: ["Альтернативная история"],
  },
  {
    id: 5,
    name: "Цветы для Элджернона",
    author: "Дэниел Киз",
    cover: "/bookCovers/FlowersforAlgernon.jpg",
    genres: [
      "Научная Фантастика",
      "Классическая проза ХX века",
      "Социально-психологическая фантастика",
    ],
  },
  {
    id: 6,
    name: "Пасынки вселенной",
    author: "Пол Андерсон",
    cover: "/bookCovers/StepsonsOfTheUniverse.jpg",
    genres: ["Научная Фантастика"],
  },
  {
    id: 7,
    name: "Андрей Беспамятный",
    author: "Александр Прозоров",
    cover: "/bookCovers/AndreyBespamyatny.jpg",
    genres: ["Авантюрный роман", "Исторические приключения", "Попаданцы"],
  },
  {
    id: 8,
    name: "Пришельцы",
    author: "Сергей Алексеев",
    cover: "/bookCovers/Thealiens.jpg",
    genres: ["Приключения"],
  },
  {
    id: 9,
    name: "Семья уродов",
    author: "Дмитрий Липскеров",
    cover: "/bookCovers/TheFamilyOfFreaks.jpg",
    genres: ["Драма"],
  },
];

const App = () => {
  const [listBooks, setListBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAuthorized, setIsAuthrized] = useState(true);
  const [user, setUser] = useState(null);

  const [sortingName, setSortingName] = useState("");
  const [headline, setHeadline] = useState("Лучшие книги");

  useEffect(() => {
    if (sortingName) {
      setListBooks(sortingBooks(listBooks, sortingName));
    }
  }, [sortingName]);

  useEffect(() => {
    setListBooks(originalListBooks);
    if (headline.includes("Результат поиска: ")) {
      const searchText = headline.substring(19).slice(0, -1);
      setListBooks((prev) =>
        prev.filter(
          (el) =>
            el.name.toLowerCase().includes(searchText) ||
            el.author.toLowerCase().includes(searchText) ||
            el.genres.some((genre) => genre.toLowerCase().includes(searchText))
        )
      );
    } else if (headline === "Избранное") {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setListBooks((prev) => prev.filter((el) => favorites.includes(el.id)));
    } else if (headline !== "Лучшие книги") {
      setListBooks((prev) => prev.filter((el) => el.genres.includes(headline)));
    }
  }, [headline]);

  return (
    <BrowserRouter>
      <div className="app" id="app">
        <Header
          isAuthorized={isAuthorized}
          setIsAuthrized={setIsAuthrized}
          setUser={setUser}
          setSortingName={setSortingName}
          setHeadline={setHeadline}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={<BookList listBooks={listBooks} headline={headline} />}
            />
            <Route
              path="/login"
              element={
                <Auth
                  users={users}
                  setUsers={setUsers}
                  setIsAuthrized={setIsAuthrized}
                  setUser={setUser}
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
