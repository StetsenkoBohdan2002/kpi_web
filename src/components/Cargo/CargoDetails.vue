<template>
  <div>
    <h2>Деталі замовлення вантажу</h2>
    <p><strong>Ім'я:</strong> {{ cargo.name }}</p>
    <p><strong>Тип:</strong> {{ cargo.type }}</p>
    <p><strong>Кількість:</strong> {{ cargo.quantity }}</p>
  </div>
</template>

<script>
export default {
  props: ['cargo'],
};
</script>

<style scoped>
/* Стилі для деталей замовлення */
</style>
