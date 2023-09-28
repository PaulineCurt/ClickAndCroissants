<template>
    <div class="panier__component">
      <router-link :to=" { name: 'Basket' }">
      <button class="btn-cart">
          <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
          </svg>
          <span>
            {{ cartTotalQuantity }}
          </span>
        </button>
      </router-link>
    </div>
  </template>
  
<script>
import { cart } from "@/scripts/shop.js";
 
export default {

  data() {
    return {
      cart: cart,
    };
  },
  computed: {
    cartTotalQuantity() {
      return this.cart.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
}
</script>

<style scoped lang="scss">
.panier__component {
    position: fixed;
    right: 0;
    padding: 3vw;
    background: transparent;
    z-index: 34;

    .btn-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  position: relative;
}

.btn-cart::after {
  width: fit-content;
  height: fit-content;
  position: absolute;
  font-size: 15px;
  color: orange;
  opacity: 0;
  visibility: hidden;
  transition: .2s linear;
  top: 115%;
  background: transparent;
}

.icon-cart {
  width: 24.38px;
  height: 30.52px;
  transition: .2s linear;
  background: transparent;

}

.icon-cart path {
  fill: orange;
  transition: .2s linear;
  background: transparent;
}

.btn-cart:hover > .icon-cart {
  transform: scale(1.2);
}

.btn-cart:hover > .icon-cart path {
  fill: #2c3e50;
}
span {
    background: transparent;
}

.btn-cart:hover::after {
  visibility: visible;
  opacity: 1;
  top: 105%;
}

.quantity {
  display: none;
  background-color: transparent;
}
}
</style>