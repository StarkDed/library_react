import { useState } from "react";
import * as ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";

import Search from "../Search/Search.jsx";
import AuthButton from "../AuthButton/AuthButton.jsx";
import Catalog from "../Catalog/Catalog.jsx";

const Header = ({
  isAuthorized,
  setIsAuthrized,
  setUser,
  setSortingName,
  setHeadline,
}) => {
  const navigate = useNavigate();
  const [showCatalog, setShowCatalog] = useState(false);
  let appRoot = document.getElementById("app");

  return (
    <>
      <header>
        <div className={styles["header-content"]}>
          <h1
            className={styles["title"]}
            onClick={() => {
              setHeadline("Лучшие книги");
              setShowCatalog(false);
              navigate("/");
            }}
          >
            Library
          </h1>
          <button
            className={`${styles["btn"]} ${styles["btn-catalog"]} ${
              isAuthorized ? styles["near-catalog"] : ""
            }`}
            onClick={() => setShowCatalog((prev) => !prev)}
          >
            Каталог
          </button>
          <Search setSortingName={setSortingName} />
          <AuthButton
            isAuthorized={isAuthorized}
            setIsAuthrized={setIsAuthrized}
            setUser={setUser}
            setHeadline={setHeadline}
          />
        </div>
      </header>
      {showCatalog &&
        ReactDOM.createPortal(
          <Catalog setShowCatalog={setShowCatalog} setHeadline={setHeadline} />,
          appRoot
        )}
    </>
  );
};

export default Header;
