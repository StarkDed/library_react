import { Link } from "react-router-dom";

import styles from "./authButton.module.css";

import Account from "../../assets/svg/Account/Account.jsx";

const AuthButton = ({ isAuthorized }) => {
  return (
    <>
      {isAuthorized ? (
        <Account />
      ) : (
        <Link to="/login" className={styles["btn-login"]}>
          Войти
        </Link>
      )}
    </>
  );
};

export default AuthButton;
