import { createStore } from 'vuex';
import cart from './cart.js';

export default createStore({
  state: {
    address: "18 avenue du Beurre, Aix-en-Provence, France",
    email: "clickandcroissants@mail.com",
    phone: "01 88 88 88 88",
    restaurantName: "Click & Croissants",
    logo: {
      source: require("@/assets/logo.png"),
      alt: "Logo Click & Croissants"
    },
    hours: {
      mondayFriday: "06:00 à 16:00",
      saturday: "07:00 à 14:00",
      sunday: "07:00 à 12:00",
    }
  },
  getters: {
    getAddress: (state) => state.address,
    getEmail: (state) => state.email,
    getPhone: (state) => state.phone,
    getRestaurantName: (state) => state.restaurantName,
    getLogo: (state) => state.logo,
    getHours: (state) => state.hours,
  },
  modules: {
    cart,
  },
});






