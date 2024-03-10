<template>
  <div id="app" class="app">
    <Header class="header" />
    <div class="content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch('loadUserFromLocalStorage');
    this.$store.dispatch('checkAndAddOrderFromLocalStorage');
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* Глобальні стилі */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;
  margin: 0 auto;
}

/* Стилі для компонентів */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  padding: 20px 0;
}
</style>
