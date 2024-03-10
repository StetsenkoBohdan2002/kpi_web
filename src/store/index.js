import { createStore } from 'vuex';
import {
  state as registrationState,
  mutations as registrationMutations,
  actions as registrationActions,
} from './registration';
import { state as orderState, mutations as orderMutations, actions as orderActions } from './cargo';

export default createStore({
  state: {
    // Додатковий стан за потреби
  },
  mutations: {
    // Додаткові мутації за потреби
  },
  actions: {
    // Додаткові дії за потреби
  },
  modules: {
    registration: {
      state: registrationState,
      mutations: registrationMutations,
      actions: registrationActions,
    },
    cargo: {
      state: orderState,
      mutations: orderMutations,
      actions: orderActions,
    },
  },
});
