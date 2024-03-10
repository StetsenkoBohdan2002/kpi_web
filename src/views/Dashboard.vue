<template>
  <div class="user-cabinet">
    <h2 class="user-cabinet__title">Кабінет користувача</h2>
    <p class="user-cabinet__welcome">Ласкаво просимо, {{ registration.user.username }}!</p>
    <router-link to="/cargo-form" class="user-cabinet__link">Додати замовлення</router-link>
    <h3 class="user-cabinet__subtitle">Мої замовлення</h3>
    <CargoList :cargoes="cargo.orders" v-if="cargo.orders.length > 0" @removeOrder="removeOrder" @updateOrder="updateOrder" />
    <p v-else class="user-cabinet__empty">У вас ще немає замовлень вантажів.</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CargoList from '@/components/Cargo/CargoList.vue';

export default {
  components: {
    CargoList,
  },
  computed: {
    ...mapState(['cargo','registration']),
    username() {
      return 'John Doe';
    },
  },
  methods: {
    ...mapActions('cargo',['addNewOrder', 'removeOrder', 'updateExistingOrder']),
  },
};
</script>

<style scoped>
.user-cabinet__title {
  font-size: 24px;
  margin-bottom: 10px;
}

.user-cabinet__welcome {
  font-size: 16px;
}

.user-cabinet__link {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.user-cabinet__link:hover {
  text-decoration: underline;
}

.user-cabinet__subtitle {
  font-size: 20px;
  margin-top: 20px;
}

.user-cabinet__empty {
  margin-top: 10px;
  font-style: italic;
  color: #999;
}
</style>
