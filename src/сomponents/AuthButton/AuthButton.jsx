import { Link } from "react-router-dom";

import styles from "./authButton.module.css";

const AuthButton = () => {
  return (
    <Link to="/login" className={styles["btn-login"]}>
      Войти
    </Link>
  );
};

export default AuthButton;
