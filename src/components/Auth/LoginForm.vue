<template>
  <form @submit.prevent="login" class="login-form">
    <div class="form-group" :class="{ 'has-error': emailError }">
      <input type="email" v-model="email" placeholder="Електронна пошта" required @input="checkEmail" />
      <span v-if="emailError" class="error-message">Будь ласка, введіть коректну електронну пошту</span>
    </div>
    <div class="form-group" :class="{ 'has-error': passwordError }">
      <input type="password" v-model="password" placeholder="Пароль" required @input="checkPassword" />
      <span v-if="passwordError" class="error-message">Будь ласка, введіть пароль довше 5 символів</span>
    </div>
    <button type="submit" class="btn-login">Увійти</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
    };
  },
  methods: {
    login() {
      if (!this.emailError && !this.passwordError) {
        this.$emit('loginUser', {
          email: this.email,
          password: this.password,
        });
      } else {
        console.error('Форма не пройшла валідацію');
      }
    },
    checkEmail() {
      this.emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    checkPassword() {
      this.passwordError = this.password.length <= 5;
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9ac;
}

.form-group {
  position: relative;
  margin-bottom: 10px;
}

.has-error input {
  border-color: red;
}

.error-message {
  font-size: 12px;
  color: red;
}

.login-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0056b3;
}
</style>
