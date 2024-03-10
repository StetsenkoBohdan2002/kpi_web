<template>
  <div class="login-page">
    <LoginForm @loginUser="loginUser" />
  </div>
</template>

<script>
import LoginForm from '@/components/Auth/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  methods: {
    loginUser(req) {
      const user = req;
      // Викликати дію авторизації зі стору
      this.$store.dispatch('loginUser', user);
      // Перенаправити користувача на домашню сторінку після успішної авторизації
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Стилі для сторінки реєстрації */
.login-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
