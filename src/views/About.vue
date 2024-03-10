<template>
  <div class="about">
    <h2 class="about-title">Про нас</h2>
    <p class="about-description">
      Ми - компанія, яка спеціалізується на доставці вантажів усіх видів та розмірів. Наша компанія працює з 2005 року і
      має бездоганну репутацію в галузі логістики та транспортування. Ми забезпечуємо повний спектр послуг з доставки,
      включаючи збір та упаковку вантажів, зручне відстеження, страхування та багато іншого.
    </p>
    <p class="about-description">
      Наша місія - забезпечити найкращі умови для наших клієнтів, гарантуючи безпеку та швидкість доставки. Ми постійно
      вдосконалюємо наші послуги та розвиваємо нові технології, щоб забезпечити максимальний комфорт та задоволення для
      наших клієнтів.
    </p>
    <h3 class="about-subtitle">Наші послуги:</h3>
    <ul class="about-list">
      <li>Міжміська доставка</li>
      <li>Міжнародна доставка</li>
      <li>Експрес-доставка</li>
      <li>Вантажні перевезення</li>
      <li>Трекінг та відстеження вантажу</li>
    </ul>
    <h3 class="about-subtitle">Статистика:</h3>
    <table class="about-table">
      <tr>
        <th>Рік</th>
        <th>Обсяг доставки (тонн)</th>
        <th>Задоволені клієнти (%)</th>
      </tr>
      <tr v-for="statistic in statistics" :key="statistic.year">
        <td>{{ statistic.year }}</td>
        <td>{{ statistic.volume }}</td>
        <td>{{ statistic.satisfaction }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: [
        { year: 2019, volume: 15000, satisfaction: 98 },
        { year: 2020, volume: 18000, satisfaction: 99 },
        { year: 2021, volume: 20000, satisfaction: 99.5 },
      ],
    };
  },
};
</script>

<style scoped>
.about-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 1.5px solid #b6b6b6;
  padding-bottom: 10px;
}

.about-description {
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-list {
  color: #555;
  font-size: 16px;
  margin-bottom: 20px;
}

.about-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.about-table th,
.about-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.about-table th {
  background-color: #f2f2f2;
  color: #333;
}

.about-table td {
  text-align: center;
}

.about-subtitle {
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
}
</style>
