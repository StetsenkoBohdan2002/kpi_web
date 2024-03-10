<template>
  <div class="order-form-container">
    <button @click="goBack" class="back-button">Назад</button>
    <h2 class="form-title">{{ editing ? 'Редагування замовлення' : 'Нове замовлення' }}</h2>
    <form @submit.prevent="submitOrder" class="order-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="name">Ім'я:</label>
          <input :class="{'error': nameError}" type="text" v-model="name" id="name" class="form-input" @input="validateName" />
          <span v-if="nameError" class="error-message">Введіть ім'я</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="cargoType">Тип вантажу:</label>
          <input :class="{'error': cargoTypeError}" type="text" v-model="cargoType" id="cargoType" @input="validateCargoType" class="form-input" />
          <span v-if="cargoTypeError" class="error-message">Введіть тип вантажу</span>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="quantity">Кількість:</label>
          <input type="number" v-model="quantity" id="quantity" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label" for="price">Ціна:</label>
          <input type="number" v-model="price" id="price" class="form-input" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="deliveryDate">Дата доставки:</label>
          <input type="date" v-model="deliveryDate" id="deliveryDate" class="form-input" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="pickupLocation">Місце відправлення:</label>
          <input type="text" v-model="pickupLocation" id="pickupLocation" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label" for="deliveryLocation">Місце доставки:</label>
          <input type="text" v-model="deliveryLocation" id="deliveryLocation" class="form-input" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="shippingCompany">Транспортна компанія:</label>
          <input type="text" v-model="shippingCompany" id="shippingCompany" class="form-input" />
        </div>
        <div class="form-group form-group__checkbox">
          <label class="form-label" for="isUrgent">Терміново</label>
          <input type="checkbox" v-model="isUrgent" id="isUrgent" class="form-checkbox" />
        </div>
      </div>
      <button type="submit" class="submit-button">{{ editing ? 'Редагувати' : 'Замовити' }}</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      editing: false,
      name: '',
      cargoType: '',
      quantity: 0,
      price: 0,
      deliveryDate: '',
      pickupLocation: '',
      deliveryLocation: '',
      shippingCompany: '',
      isUrgent: false,
      nameError: false,
      cargoTypeError: false,
    };
  },
  computed: {
    ...mapState(['cargo']),
  },
  mounted() {
    if (this.$route.query.cargo) {
      this.editing = true;
      this.loadCargoData();
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitOrder() {
      if (this.validateForm()) {
        if (this.editing) {
          this.$store.dispatch('updateExistingOrder', {
            index: this.$route.query.cargo,
            updatedOrder: this.collectFormData(),
          });
        } else {
          this.$store.dispatch('addNewOrder', this.collectFormData());
        }
        this.$router.go(-1);
      }
    },
    collectFormData() {
      return {
        name: this.name,
        cargoType: this.cargoType,
        quantity: this.quantity,
        price: this.price,
        deliveryDate: this.deliveryDate,
        pickupLocation: this.pickupLocation,
        deliveryLocation: this.deliveryLocation,
        shippingCompany: this.shippingCompany,
        isUrgent: this.isUrgent,
      };
    },
    loadCargoData() {
      const cargoIndex = this.$route.query.cargo;
      const cargo = this.cargo.orders[cargoIndex];
      this.name = cargo.name;
      this.cargoType = cargo.cargoType;
      this.quantity = cargo.quantity;
      this.price = cargo.price;
      this.deliveryDate = cargo.deliveryDate;
      this.pickupLocation = cargo.pickupLocation;
      this.deliveryLocation = cargo.deliveryLocation;
      this.shippingCompany = cargo.shippingCompany;
      this.isUrgent = cargo.isUrgent;
    },

    validateName() {
      this.nameError = this.name.length < 5;
    },
    validateCargoType() {
      this.cargoTypeError = this.cargoType.length < 3;
    },
    validateForm() {
      this.validateName();
      this.validateCargoType();
      return !this.nameError && !this.cargoTypeError;
    },
  },
};
</script>

<style scoped>
/* Стилі для форми замовлення вантажу */
.order-form-container {
  margin: 0 auto;
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
}

.order-form {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.form-group {
  flex-basis: 49%;
}

.form-group__checkbox {
  display: flex;
  align-items: center;
}

.form-label {
  display: block;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-input.error{
  border-color:red;
}

.form-checkbox {
  margin-right: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button {
  padding: 8px 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.back-button:hover {
  background-color: #f4f4f4;
  border-color: #bbb;
}

.error-message {
  color: red;
  font-size: 13px;
}
</style>
