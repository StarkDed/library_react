import { useState } from "react";
import * as ReactDOM from "react-dom";

import styles from "./header.module.css";

import Search from "../Search/Search.jsx";
import AuthButton from "../AuthButton/AuthButton.jsx";
import Catalog from "../Catalog/Catalog.jsx";

const Header = ({ setHeadline }) => {
  const [showCatalog, setShowCatalog] = useState(false);
  let appRoot = document.getElementById("app");

  return (
    <>
      <header>
        <div className={styles["header-content"]}>
          <h1
            onClick={() => {
              setHeadline("Лучшие книги");
              setShowCatalog(false);
            }}
          >
            Library
          </h1>
          <button
            className={styles["btn-catalog"]}
            onClick={() => setShowCatalog((prev) => !prev)}
          >
            Каталог
          </button>
          <Search />
          <AuthButton />
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
