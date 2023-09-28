<template>
  <div class="panier">
    <h1>Panier</h1>
    <BasketItem :cartTotalQuantity="cartTotalQuantity" />
       
    
    <div v-if="cart.total === 0 "></div>
    <div v-else>
        <div class="choose_option">
          <h1>Choisir une option :</h1>
            <router-link :to="{ name: 'PaymentTakeAway' }">
              <div class="box">
                <img src="@/assets/concept/bag.png" alt="sac">
                <h3>À emporter</h3>
              </div>
            </router-link>

            <router-link :to="{ name: 'PaymentDelivery' }">
              <div class="box">
                <img src="@/assets/concept/bike.png" alt="vélo">
                <h3>Livraison</h3>
              </div>
            </router-link>
        </div>  
</div>

  </div>
</template>

  

<script>
import { cart } from "@/scripts/shop.js";
import BasketItem from "@/components/BasketItem.vue";

export default {
  components: {
    BasketItem,
  },
  data() {
    return {
      cart: cart,
      cartTotalQuantity: 0, // Définissez cette valeur en fonction de vos besoins
    };
  },
  computed: {
    computedCartTotalQuantity() { // Renommez la propriété calculée
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
.panier {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn {
  background-color: transparent;
  position: relative;
  border: none; 
  }

  a {
    color: orange;
    text-decoration: none;
  }
  .choose_option {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

    .box {
      text-align: center;
    }
  }

.btn::after {
  content: 'supprimer';
  margin: 1vw;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: rgb(168, 7, 7);
  padding: 4px 8px;
  border-radius: 5px;
  transition: .2s linear;
  transition-delay: .2s;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
}

.icon {
  transform: scale(1.2);
  transition: .2s linear;
}

.btn:hover > .icon {
  transform: scale(1.5);
}

.btn:hover > .icon path {
  fill: rgb(168, 7, 7);
}

.btn:hover::after {
  visibility: visible;
  opacity: 1;
  top: -160%;
}
}
</style>