import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/main.scss';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.apiUrl = `${process.env.VUE_APP_API}/v2/`;
const axiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_API}/v2/`,
  headers: { authorization: document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, '$1') },
});

app.use(router);
app.use(VueAxios, { axiosInstance });
app.use(VueSweetalert2);
app.provide('axiosInstance', app.config.globalProperties.axiosInstance);

app.component('VLoading', Loading);

app.mount('#app');
