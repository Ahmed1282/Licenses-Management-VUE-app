import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Login from './components/Login/LoginPage.vue';
import Signup from './components/Signup/SignupPage.vue';
import DashboardAdmin from './components/Dashboard/DashboardAdmin.vue';
import DashboardClient from './components/Dashboard/DashboardClient.vue';
import AddProduct from './components/AddProduct/AddProduct.vue';
import GenerateLicenseKey from './components/GenerateLicenseKey/GenerateLicenseKey.vue';
import ViewInfo from './components/ViewInfo/ViewInfo.vue';
import LicenseActivationForm from './components/LicenseActivationForm/LicenseActivationForm.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboardAdmin', component: DashboardAdmin },
  { path: '/dashboardClient', component: DashboardClient },
  { path: '/addproduct', component: AddProduct },
  { path: '/generatelicense', component: GenerateLicenseKey },
  { path: '/viewinfo', component: ViewInfo },
  { path: '/licenceActive', component: LicenseActivationForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
