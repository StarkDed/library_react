import { useState, useEffect, useRef } from "react";

import styles from "./menuUser.module.css";

import BookSvg from "../../assets/svg/BookSvg/BookSvg.jsx";

const MenuUser = ({
  showMenu,
  setShowMenu,
  setIsAuthrized,
  setUser,
  setHeadline,
}) => {
  const wrapperRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClickOutside = (event) => {
    if (
      showMenu &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setFadeOut(true);
      setTimeout(() => {
        setShowMenu(false);
        setFadeOut(false);
      }, 500);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div
      className={`${styles["menu-user-wrapper"]} ${
        fadeOut ? styles["fade-out"] : ""
      }`}
      ref={wrapperRef}
    >
      <BookSvg />
      <div className={styles["menu-user-container"]}>
        <h2 className={styles.title}>«Меню»</h2>
        <div className={styles["list-btns"]}>
          <button
            className={`${styles["btn"]} ${styles["btn-favorites"]}`}
            onClick={(e) => {
              setHeadline(e.target.textContent);
              setShowMenu(false);
            }}
          >
            Избранное
          </button>
          <button className={`${styles["btn"]} ${styles["btn-my-books"]}`}>
            Мои книги
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setIsAuthrized(false);
          setShowMenu(false);
          setUser(null);
        }}
        className={`${styles["btn"]} ${styles["btn-exit"]}`}
      >
        Выход
      </button>
    </div>
  );
};

export default MenuUser;
