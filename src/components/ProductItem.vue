<template>
    <div class="menu-item">
      <picture>
        <img class="menu-item__image" :src="product.image.source" :alt="product.image.alt"/>
      </picture>
        <div class="infos">
            <h3>{{ product.name }}</h3>
                <p v-if="product.description">{{ product.description }}</p>
                    <div v-else></div>
                        <h4>{{ product.price.toFixed(2) }} €</h4>
        </div>

        <div v-if="product.inStock" class="add">
            <label for="add-item-quantity">
                Quantité : {{ localProduct.quantity }}
            </label>
            <div class="quantity-control">
              <van-stepper 
              v-model="localProduct.quantity" 
              theme="round" button-size="22" disable-input         
              :style="{ '--van-stepper-button-round-theme-color': '#ffa500' }"
              />

            </div>
                <button @click="addToShoppingCart" class="btn btn-success add-btn mt-4">
                    {{ localProduct.message || defaultMessage }}
                </button>
                
        </div>
        <div v-else class="out-of-stock">
            <p>Victime de son succès!</p>
        </div>
    </div>
  </template>
  
<script>
import { cart } from "@/scripts/shop.js";

export default {
  props: {
    product: Object,
    defaultMessage: String,
  },

  data() {
    return {
      localProduct: {
        ...this.product,
        quantity: 1,
      },
    };
  },

  methods: {
    addToShoppingCart() {
  if (this.localProduct.quantity > 0) {
    // Ajoutez le produit au panier
    cart.addToCart(this.localProduct);

    // Affichez le message approprié
    this.localProduct.message = `${this.localProduct.quantity} ${
      this.localProduct.quantity === 1 ? this.localProduct.name : `${this.localProduct.name}s`
    } ajouté(e)s au panier`;

  }
},
    incrementQuantity() {
      this.localProduct.quantity++;
    },
    decrementQuantity() {
      if (this.localProduct.quantity > 0) {
        this.localProduct.quantity--;
      }
    },
  },
};
</script>
  
<style scoped lang="scss">

@import "@/styles/products.scss";

</style>