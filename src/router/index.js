import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Login from '@/views/Login.vue';
import Registration from '@/views/Registration.vue';
import Dashboard from '@/views/Dashboard.vue';
import CargoForm from '@/components/Cargo/CargoForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cargo-form',
    name: 'CargoForm',
    component: CargoForm
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    // Додайте meta-поля тут, якщо потрібно
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
