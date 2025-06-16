function registration(setUsers, formData) {
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
}

function login(users, formData) {
  return formData;
}

export { registration, login };
