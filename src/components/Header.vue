<template>
  <header>
    <div class="container">
      <nav>
        <ul class="menu-left">
          <li><router-link to="/">Головна</router-link></li>
          <li><router-link to="/about">Про нас</router-link></li>
          <li><router-link to="/services">Послуги</router-link></li>
        </ul>
        <ul class="menu-right">
          <li v-if="!getIsLoggedIn"><router-link to="/login">Увійти</router-link></li>
          <li v-if="!getIsLoggedIn"><router-link to="/registration">Зареєструватися</router-link></li>
          <li v-if="getIsLoggedIn"><router-link to="/dashboard">Кабінет</router-link></li>
          <li v-if="getIsLoggedIn"><button @click="logout" class="logout-btn">Вийти</button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Показник авторизації
      username: '', // Ім'я користувача
    };
  },
  methods: {
    logout() {
      // Логіка виходу з системи
      this.$store.dispatch('logoutUser');
      // Додаткова логіка, якщо потрібно
    },
  },
  computed: {
    getIsLoggedIn() {
      let isLoggedIn = this.$store.state.registration.user;
      if (isLoggedIn) {
        this.username = JSON.parse(localStorage.getItem('user')).username;
      }
      return isLoggedIn;
    },
  },
  created() {
    // Перевірка, чи користувач авторизований при завантаженні компонента
    this.isLoggedIn = !!localStorage.getItem('user');
    if (this.isLoggedIn) {
      this.username = JSON.parse(localStorage.getItem('user')).username;
    }
  },
};
</script>

<style scoped>
/* Стилі для шапки */
header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}

.menu-left {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-left li {
  display: inline-block;
  margin-right: 10px;
}
.menu-left li:hover,
.menu-right li:hover {
  text-decoration: underline;
}

.menu-right {
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 20px;
  display: flex;
  align-items: center;
}

.menu-right li {
  display: inline-block;
}

.logout-btn {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #cc0000;
}
</style>
