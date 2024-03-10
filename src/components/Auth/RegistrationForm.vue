<template>
    <form @submit.prevent="register" class="registration-form">
      <div class="form-group" :class="{ 'has-error': usernameError }">
        <input type="text" v-model="username" placeholder="Ім'я користувача" required @input="checkUsername" />
        <span v-if="usernameError" class="error-message">Будь ласка, введіть ім'я користувача довше 5 символів</span>
      </div>
      <div class="form-group" :class="{ 'has-error': emailError }">
        <input type="email" v-model="email" placeholder="Електронна пошта" required @input="checkEmail" />
        <span v-if="emailError" class="error-message">Будь ласка, введіть коректну електронну пошту</span>
      </div>
      <div class="form-group" :class="{ 'has-error': passwordError }">
        <input type="password" v-model="password" placeholder="Пароль" required @input="checkPassword" />
        <span v-if="passwordError" class="error-message">Будь ласка, введіть пароль довше 5 символів</span>
      </div>
      <button type="submit" class="btn-register">Зареєструватися</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        usernameError: false,
        emailError: false,
        passwordError: false,
      };
    },
    methods: {
      register() {
        if (!this.usernameError && !this.emailError && !this.passwordError) {
          const user = {
            username: this.username,
            email: this.email,
            password: this.password,
          };
          // Викликати дію реєстрації зі стору
          this.$store.dispatch('registerUser', user);

          this.$router.push('/login');
        } else {
          console.error('Форма не пройшла валідацію');
        }
      },
      checkUsername() {
        this.usernameError = this.username.length <= 5;
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
  .registration-form {
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
  
  .registration-form input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn-register {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .btn-register:hover {
    background-color: #0056b3;
  }
  </style>
  