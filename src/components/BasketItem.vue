<template>
 <div class="basket">
        <div class="total">   
            <h2>{{ cartTotalQuantity }} articles dans votre panier</h2>
            <ul>
                <li v-for="item in cart.items" :key="item.name">

                {{ item.quantity }} - {{ item.name }} {{ item.price }} €
                <button class="btn" @click="removeOneItemFromCart(item)">
                    <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                    </svg>
                </button>
                </li>
            </ul>
                <div v-if="cart.total === 0">
                    <p>Votre panier est vide.</p>
                    <router-link :to="{ name: 'Products'}" class="products_acces">
                    <h2 class="acces">Accéder à tous nos produits</h2>
                    </router-link>
                </div>
                    <div v-else>
                        <p>Total : {{ cart.total.toFixed(2) }} €</p>
                    </div>
            </div>
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
  methods: {
    removeOneItemFromCart(item) {
      // Supprimez un élément de l'article dans le panier
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.cart.total -= item.price;
      } else {
        // S'il ne reste qu'un élément, supprimez complètement l'article du panier
        const index = this.cart.items.indexOf(item);
        if (index !== -1) {
          this.cart.items.splice(index, 1);
        }
      }

      if (this.cart.items.length === 0) {
        this.cart.total = 0;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.basket {
    display: flex;
    flex-direction: column;
    align-items: center;
 .total {
        width: 30vw;
    
    }
    .products_acces {
      color: orange;
    }
    ul {
        list-style: none;
    }
.acces {
  margin-top: 5vh;
  
}
a {
  color: orange;
  text-decoration: none;
}
}

</style>