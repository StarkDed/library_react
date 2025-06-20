import * as ReactDom from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./authButton.module.css";

import AccountSvg from "../../assets/svg/AccountSvg/AccountSvg.jsx";
import MenuUser from "../MenuUser/MenuUser.jsx";

const AuthButton = ({ isAuthorized, setIsAuthrized, setUser, setHeadline }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {isAuthorized ? (
        <AccountSvg onClick={() => setShowMenu((prev) => !prev)} />
      ) : (
        <Link to="/login" className={styles["btn-login"]}>
          Войти
        </Link>
      )}
      {showMenu &&
        ReactDom.createPortal(
          <MenuUser
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setIsAuthrized={setIsAuthrized}
            setUser={setUser}
            setHeadline={setHeadline}
          />,
          document.getElementById("app")
        )}
    </>
  );
};

export default AuthButton;
