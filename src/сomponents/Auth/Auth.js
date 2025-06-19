function registration(users, setUsers, formData) {
  try {
    let user;
    validationReg(users, formData);
    setUsers((prev) => {
      user = {
        id: prev.length + 1,
        login: formData.login,
        password: formData.password,
        role: "user",
      };

      return [...prev, user];
    });

    return { status: "success", user: user };
  } catch (e) {
    return { status: "error", error: e.message };
  }
}

function login(users, formData) {
  try {
    const user = validationLogin(users, formData);
    return { status: "success", user: user };
  } catch (e) {
    return { status: "error", error: e.message };
  }
}

function validationLogin(users, formData) {
  findUser(users, formData.login, formData.password);
}

function findUser(users, login, password) {
  const user = users.find(
    (user) => user.login === login && user.password === password
  );
  if (user === undefined) {
    throw new Error("Пользователь не найден");
  }

  return user;
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
