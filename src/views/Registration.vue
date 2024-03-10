<template>
  <div class="registration-page">
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from '@/components/Auth/RegistrationForm.vue';

export default {
  components: {
    RegistrationForm,
  },
};
</script>

<style scoped>
/* Стилі для сторінки реєстрації */
.registration-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
