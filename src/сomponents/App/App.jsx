import { useState, useEffect } from "react";

import "./app.css";

import Header from "../Header/Header.jsx";
import BookList from "../BookList/BookList.jsx";
import Footer from "../Footer/Footer.jsx";

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
  const [headline, setHeadline] = useState("Лучшие книги");

  const Content = (
    <>
      <BookList listBooks={listBooks} headline={headline} />
      <Footer></Footer>
    </>
  );

  useEffect(() => {
    setListBooks(originalListBooks);
    if (headline !== "Лучшие книги") {
      setListBooks((prev) => prev.filter((el) => el.genres.includes(headline)));
    }
  }, [headline]);

  return (
    <div className="app" id="app">
      <Header setHeadline={setHeadline} />
      {Content}
    </div>
  );
};

export default App;
