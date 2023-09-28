<template>
  <div class="all_products">
    <div class="text">
      <div class="select_category">
        <h2>Sélectionnez une catégorie :</h2>
        <van-radio-group v-model="selectedCategory">
          <van-radio name="" label="Tous nos produits" checked-color="#ffa500">Tous nos produits</van-radio>
          <van-radio v-for="category in categories" :key="category" :name="category" :label="category" checked-color="#ffa500">{{ category }}</van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="products section_products">
      <h1 v-if="selectedCategory">{{ selectedCategory }}</h1>
      <h1 v-else class="text-center">Tous nos produits</h1>
      <div class="menu">
        <div v-for="item in filteredProducts" :key="item.name" class="menu-item">
          <product-item :product="item" :default-message="defaultMessage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BakeryView from "@/views/BakeryView.vue";
import ViennesieView from "@/views/ViennesieView.vue";
import CakeView from "@/views/CakeView.vue";
import SnackingView from "@/views/SnackingView.vue";
import DrinkView from "./DrinkView.vue";
import { cart } from "@/scripts/shop.js";
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      shoppingCart: cart,
      defaultMessage: "Ajouter au panier",
      itemMessage: '',
      boulangerie: BakeryView.data().boulangerie,
      viennoiseries: ViennesieView.data().viennoiseries,
      patisseries: CakeView.data().patisseries,
      snacking: SnackingView.data().snacking,
      boissons: DrinkView.data().boissons,
      selectedCategory: "", // Créez une variable pour le modèle de la radio Vant sélectionnée
      categories: ["Boulangerie", "Pâtisseries", "Viennoiseries", "Snacking", "Boissons"]
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === "Tous nos produits" || this.selectedCategory === "") {
        return [...this.boulangerie, ...this.patisseries, ...this.viennoiseries, ...this.snacking];
      } else {
        const selectedProducts = [];

        if (this.selectedCategory === "Boulangerie") {
          selectedProducts.push(...this.boulangerie);
        }

        if (this.selectedCategory === "Pâtisseries") {
          selectedProducts.push(...this.patisseries);
        }

        if (this.selectedCategory === "Viennoiseries") {
          selectedProducts.push(...this.viennoiseries);
        }

        if (this.selectedCategory === "Snacking") {
          selectedProducts.push(...this.snacking);
        }

        if (this.selectedCategory === "Boissons") {
          selectedProducts.push(...this.boissons);
        }

        return selectedProducts;
      }
    }
  }
};
</script>


  
<style scoped lang="scss">

@import "@/styles/products.scss";

.all_products {
  display: flex;

  .text {
    width: 20vw;
  }

  .select_category {
    margin-top: 15vh;
    width: 32vw;
    position: fixed;
    padding-left: 2vw;

    .van-radio {
    margin-bottom: 10px; /* Ajustez la valeur en pixels selon votre préférence */
    }

  }
  .section_products {
    border-left: 1px solid orange;
    margin-left: 17vw;
    z-index: 4;
  }

  h1 {
    text-align: center;
    margin-bottom: 10vh;
  }
}

</style>