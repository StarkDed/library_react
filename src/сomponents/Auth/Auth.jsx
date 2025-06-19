import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./auth.module.css";

import { registration, login } from "./Auth.js";

const Auth = ({ users, setUsers, setIsAuthrized, setUser }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isRegistration, setIsRegistration] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeaterPassword: "",
  });

  const handleChangeFormData = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAuth = () => {
    const message = isRegistration
      ? registration(users, setUsers, formData)
      : login(users, formData);

    if (message.status === "success") {
      setUser(message.user);
      navigate("/");
      setIsAuthrized(true);
    } else if (message.status === "error") {
      setError(message.error);
    }
  };

  return (
    <div className={styles["auth-container"]}>
      <h2 className={styles.title}>
        {isRegistration ? "Регистрация" : "Войти"}
      </h2>
      <p
        className={styles["error-output"]}
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </p>
      <div className={styles.container}>
        <label htmlFor="login">Логин</label>
        <input
          className={styles["input-reg login"]}
          id="login"
          type="text"
          onChange={handleChangeFormData}
        />
      </div>
      <div className={styles.container}>
        <label htmlFor="password">Пароль</label>
        <input
          className={styles["input-reg password"]}
          id="password"
          type="password"
          onChange={handleChangeFormData}
        />
      </div>
      <div
        className={styles.container}
        style={{ display: isRegistration ? "block" : "none" }}
      >
        <label htmlFor="repeaterPassword">Повтор пароля</label>
        <input
          className={styles["input-reg repeaterPassword"]}
          id="repeaterPassword"
          type="password"
          onChange={handleChangeFormData}
        />
      </div>
      <button
        className={`${styles["btn"]} ${styles["btn-login"]}`}
        onClick={handleAuth}
      >
        {isRegistration ? "Зарегистрироваться" : "Войти"}
      </button>
      <span
        className={styles["toggle-button"]}
        onClick={() => {
          setIsRegistration((prev) => !prev);
        }}
      >
        {isRegistration ? "Войти" : "Зарегистрироваться"}
      </span>
    </div>
  );
};

export default Auth;
