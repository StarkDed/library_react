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
  try {
    return { status: "success" };
  } catch (e) {
    return { status: "error", error: e.message };
  }
}

function validationReg(users, formData) {
  checkLoginReg(users, formData.login);
  checkPasswordReg(formData.password, formData.repeaterPassword);
}

function checkLoginReg(users, login) {
  checkLoginOnEmpty(login);
  checkLoginOnDublicat(users, login);
}

function checkLoginOnEmpty(login) {
  if (login === "") {
    throw new Error("Введите логин");
  }
}

function checkLoginOnDublicat(users, login) {
  if (users.some((user) => user.login === login)) {
    throw new Error("Логин уже существует");
  }
}

function checkPasswordReg(password, repeaterPassword) {
  checkPasswordValidation(password);
  comparePasswordAndRepeaterPassword(password, repeaterPassword);
}

function checkPasswordValidation(password) {
  if (!(password.trim().length > 7)) {
    throw new Error("Некорректный пароль");
  }
}

function comparePasswordAndRepeaterPassword(password, repeaterPassword) {
  if (password !== repeaterPassword) {
    throw new Error("Повтор пароля не совпадает");
  }
}

export { registration, login };
