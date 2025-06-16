import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";

import Search from "../Search/Search.jsx";
import AuthButton from "../AuthButton/AuthButton.jsx";

const Header = ({ isAuthorized }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles["header-content"]}>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Library
        </h1>
        <button
          className={`${styles["btn-catalog"]} ${
            isAuthorized ? styles["near-catalog"] : ""
          }`}
        >
          Каталог
        </button>
        <Search />
        <AuthButton isAuthorized={isAuthorized} />
      </div>
    </header>
  );
};

export default Header;
