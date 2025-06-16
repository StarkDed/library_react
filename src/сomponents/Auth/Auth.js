function registration(users, setUsers, formData) {
  try {
    validationReg(users, formData);
    setUsers((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          login: formData.login,
          password: formData.password,
        },
      ];
    });

    return { status: "success" };
  } catch (e) {
    return { status: "error", error: e.message };
  }
}

function login(users, formData) {
  return formData;
}

function validationReg(users, formData) {
  checkLogin(users, formData.login);
  checkPassword(formData.password, formData.repeaterPassword);
}

function checkLogin(users, login) {
  if (login === "") {
    throw new Error("Введите логин");
  }

  if (users.some((user) => user.login === login)) {
    throw new Error("Логин уже существует");
  }
}

function checkPassword(password, repeaterPassword) {
  if (!(password.trim().length > 7)) {
    throw new Error("Некорректный пароль");
  }

  if (password !== repeaterPassword) {
    throw new Error("Повтор пароля не совпадает");
  }
}

export { registration, login };
