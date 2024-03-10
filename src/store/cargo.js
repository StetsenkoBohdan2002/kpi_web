// store/registration.js
export const state = () => ({
  orders: [],
});

export const mutations = {
  // Додавання нового замовлення
  addOrder(state, order) {
    state.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(state.orders)); // Оновлення локального сховища
  },
  // Видалення замовлення за індексом
  deleteOrder(state, index) {
    state.orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(state.orders)); // Оновлення локального сховища
  },
  // Оновлення замовлення за індексом
  updateOrder(state, { index, updatedOrder }) {
    state.orders[index] = updatedOrder;
    localStorage.setItem('orders', JSON.stringify(state.orders)); // Оновлення локального сховища
  },
};

export const actions = {
  // Дія для додавання нового замовлення
  addNewOrder({ commit }, order) {
    commit('addOrder', order);
  },
  checkAndAddOrderFromLocalStorage({ commit }) {
    const ordersFromLocalStorage = localStorage.getItem('orders');
    if (ordersFromLocalStorage) {
      const orders = JSON.parse(ordersFromLocalStorage);
      orders.forEach((order) => {
        commit('addOrder', order);
      });
    }
  },
  // Дія для видалення замовлення
  removeOrder({ commit, state }, index) {
    commit('deleteOrder', index);
  },
  // Дія для оновлення замовлення
  updateExistingOrder({ commit, state }, payload) {
    commit('updateOrder', payload);
  },
  // Дія для збереження списку замовлень в локальному сховищі
  saveOrdersToLocalStorage({ state }) {
    localStorage.setItem('orders', JSON.stringify(state.orders));
  },
  // Дія для очищення списку замовлень з локального сховища
  clearOrdersFromLocalStorage() {
    localStorage.removeItem('orders');
  },
};
