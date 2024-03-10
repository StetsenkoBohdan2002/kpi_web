// store/registration.js
export const state = () => ({
  user: null,
  users: [],
  isAuthenticated: false,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUsers(state, users) {
    state.users = users;
  },
  setIsAuthenticated(state, value) {
    state.isAuthenticated = value;
  },
};

export const actions = {
  loadUserFromLocalStorage({ commit }) {
    // Перевіряємо, чи є юзер в локальному сховищі
    const users = JSON.parse(localStorage.getItem('users'));
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      // Якщо юзер знайдений в локальному сховищі, зберігаємо його в сторі
      commit('setUser', user);
    }
    if (users) {
      // Якщо юзер знайдений в локальному сховищі, зберігаємо його в сторі
      commit('setUsers', users);
    }
  },
  registerUser({ commit, state }, user) {
    // Логіка реєстрації користувача
    const updatedUsers = state.users;
    updatedUsers.push(user)
    // console.log(updatedUsers)
    commit('setUsers', updatedUsers);
    // Записуємо юзера в локальне сховище
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  },
  loginUser({ commit, state }, user) {
    // Логіка авторизації користувача
    const existingUser = state.users.find(u => u.email === user.email && u.password === user.password);
    if (existingUser) {
      commit('setUser', existingUser);
      commit('setIsAuthenticated', true);
      // Записуємо юзера в локальне сховище
      localStorage.setItem('user', JSON.stringify(existingUser));
    } else {
      console.error('Користувача з такими даними не знайдено');
    }
  },
  logoutUser({ commit }) {
    // Логіка виходу користувача
    commit('setUser', null);
    commit('setIsAuthenticated', false);
    // Видаляємо юзера з локального сховища
    localStorage.removeItem('user');
  },
};
