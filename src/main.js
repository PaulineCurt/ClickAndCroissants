import { createApp } from 'vue'; // Importez createApp depuis 'vue', pas Vue.
import App from './App.vue';
import store from './store';
import router from './router/router.js'; // Importez votre configuration de route
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { cart } from '@/scripts/shop.js';
import { RadioGroup, Radio, Stepper, } from 'vant';
import 'vant/lib/index.css'; 

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Radio);
app.use(RadioGroup);
app.use(Stepper);


// Permet aux pages de revenir au TOP
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

app.config.globalProperties.cart = cart; 

app.mount('#app');

