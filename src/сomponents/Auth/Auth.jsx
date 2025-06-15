import { useState } from "react";

import styles from "./auth.module.css";

import { registration, login } from "./Auth.js";

const Auth = ({ users, setUsers }) => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeatePassword: "",
  });

  const handleChangeFormData = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className={styles["auth-container"]}>
      <h2 className={styles.title}>
        {isRegistration ? "Регистрация" : "Войти"}
      </h2>
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
        className={styles["btn-login"]}
        onClick={() => {
          if (isRegistration) {
            registration(setUsers, formData);
          } else {
            login(users, formData);
          }
        }}
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
