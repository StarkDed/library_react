import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";

import Search from "../Search/Search.jsx";
import AuthButton from "../AuthButton/AuthButton.jsx";

const Header = ({ isAuthorized, setIsAuthrized, setUser, setSortingName }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles["header-content"]}>
        <h1 className={styles["title"]} onClick={() => navigate("/")}>
          Library
        </h1>
        <button
          className={`${styles["btn"]} ${styles["btn-catalog"]} ${
            isAuthorized ? styles["near-catalog"] : ""
          }`}
        >
          Каталог
        </button>
        <Search setSortingName={setSortingName} />
        <AuthButton
          isAuthorized={isAuthorized}
          setIsAuthrized={setIsAuthrized}
          setUser={setUser}
        />
      </div>
    </header>
  );
};

export default Header;
