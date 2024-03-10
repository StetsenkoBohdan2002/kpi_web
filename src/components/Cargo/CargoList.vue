<template>
   <div class="filter">
    <div class="filter-item">
      <input type="text" v-model="nameFilter" placeholder="Фільтр за назвою" class="form-control filter-input" />
    </div>
    <div class="filter-item">
      <input type="number" v-model="quantityFilter" placeholder="Фільтр за кількістю" class="form-control filter-input" />
      <div class="custom-select">
        <select v-model="quantityOperator" class="form-control filter-operator">
          <option value="equal">Рівне</option>
          <option value="less">Менше</option>
          <option value="greater">Більше</option>
        </select>
      </div>
    </div>
  </div>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr class="table-header">
          <th class="table-header-cell" style="min-width: 150px;">Ім'я</th>
          <th class="table-header-cell" style="min-width: 100px;">Тип вантажу</th>
          <th class="table-header-cell" style="min-width: 80px;">Кількість</th>
          <th class="table-header-cell" style="min-width: 80px;">Ціна</th>
          <th class="table-header-cell" style="min-width: 120px;">Дата доставки</th>
          <th class="table-header-cell" style="min-width: 150px;">Місце відправлення</th>
          <th class="table-header-cell" style="min-width: 150px;">Місце доставки</th>
          <th class="table-header-cell" style="min-width: 150px;">Транспортна компанія</th>
          <th class="table-header-cell" style="min-width: 80px;">Терміново</th>
          <th class="table-header-cell" style="min-width: 200px;">Дії</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cargo, index) in filteredCargoes" :key="index" class="table-row">
          <td class="table-cell">{{ cargo.name }}</td>
          <td class="table-cell">{{ cargo.cargoType }}</td>
          <td class="table-cell">{{ cargo.quantity }}</td>
          <td class="table-cell">{{ cargo.price }}</td>
          <td class="table-cell">{{ cargo.deliveryDate }}</td>
          <td class="table-cell">{{ cargo.pickupLocation }}</td>
          <td class="table-cell">{{ cargo.deliveryLocation }}</td>
          <td class="table-cell">{{ cargo.shippingCompany }}</td>
          <td class="table-cell">{{ cargo.isUrgent ? 'Так' : 'Ні' }}</td>
          <td class="table-cell" style="display: flex; gap: 10px;">
            <button @click="editCargo(index)" class="btn btn-primary">Редагувати</button>
            <button @click="deleteCargo(index)" class="btn btn-danger">Видалити</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    cargoes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      nameFilter: '',
      quantityFilter: null,
      quantityOperator: 'equal',
    };
  },
  computed: {
    filteredCargoes() {
      return this.cargoes.filter(cargo => 
        (cargo.name.toLowerCase().includes(this.nameFilter.toLowerCase())) &&
        (this.filterByQuantity(cargo.quantity))
      );
    },
  },
  methods: {
    filterByQuantity(quantity) {
      if (!this.quantityFilter) return true; // If no quantity filter is set, return true
      
      switch (this.quantityOperator) {
        case 'equal':
          return quantity === parseInt(this.quantityFilter);
        case 'less':
          return quantity < parseInt(this.quantityFilter);
        case 'greater':
          return quantity > parseInt(this.quantityFilter);
        default:
          return true;
      }
    },
    editCargo(index) {
      this.$router.push({ name: 'CargoForm', query: { cargo: index } });
    },
    deleteCargo(index) {
      // Логіка для видалення замовлення
      this.$store.dispatch('removeOrder', index);
    },
  },
};
</script>

<style scoped>
.filter {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.filter-item {
  margin-right: 10px;
  display: flex;
}

.filter-input {
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  box-sizing: border-box;
  font-size: 16px;
}

.filter-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.custom-select {
  position: relative;
}

.custom-select select {
  width: 100px;
  height: 38px; /* Задаємо висоту таку ж, як інпут */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 30px 8px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E") no-repeat right 8px center/18px 18px;
  background-color: #fff;
  cursor: pointer;
}

.custom-select select:focus {
  outline: none;
  border-color: #007bff;
}


.header {
  text-align: center;
  margin-bottom: 20px;
}


.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  background-color: #f4f4f4;
}

.table-header-cell {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
}

.table-row {
  border: 1px solid #ccc;
}

.table-cell:not(:last-child) {
  padding: 8px;
  border-right: 1px solid #ccc;
}
.table-cell:last-child{
  padding: 8px;
  display: flex;
  justify-content: center;
}


.btn {
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
  border: none;
}

.btn-danger:hover {
  background-color: #c82333;
}

@media (max-width: 767px) {
  .table-responsive {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 0;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
  }
}
</style>
