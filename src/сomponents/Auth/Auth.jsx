import { useState } from "react";

import styles from "./auth.module.css";

const Auth = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <div className={styles["auth-container"]}>
      <h2 className={styles.title}>
        {isRegistration ? "Регистрация" : "Войти"}
      </h2>
      <div className={styles.container}>
        <label htmlFor="login">Логин</label>
        <input className={styles["input-reg login"]} id="login" type="text" />
      </div>
      <div className={styles.container}>
        <label htmlFor="password">Пароль</label>
        <input
          className={styles["input-reg password"]}
          id="password"
          type="password"
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
        />
      </div>
      <button className={styles["btn-login"]}>
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
