<template>
    <div class="products">
      <div class="top">
          <h1>Notre selection de {{ boulangerie[0].category }}</h1>
            <p>
              Explorez notre sélection de pains frais, cuits avec passion pour éveiller vos papilles. <br>
              Plongez dans notre univers du pain, où le clic vous offre l'opportunité de savourer des saveurs authentiques à tout moment. <br>
            </p>
      </div>
        <section class="menu">
          <div v-for="item in boulangerie" :key="item.name" class="menu-item">
            <product-item :product="item" :default-message="defaultMessage" />
          </div>
        </section>
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      shoppingCart: [],
      defaultMessage: "Ajouter au panier",
      
      boulangerie: [
        {
            name: "Baguette" ,
            price: 1.15,
            image: {
                source: require("@/assets/images/boulangerie/baguette.jpg"),
                alt: "Baguette de pain"
            },
            inStock: true,
            quantity: 1,
            category: "Pains 🥖"
        },
        {
            name: "Pain de campagne",
            price: 3.30,
            image: {
                source: require("@/assets/images/boulangerie/pain-de-campagne.jpeg"),
                alt: "Pain de camapagne"
            },
            inStock: true,
            quantity: 1,
            category: "Pains 🥖"
        },
        {
            name: "Pain aux sesame",
            price: 4,
            image: {
                source: require("@/assets/images/boulangerie/pain-aux-sesame.jpeg"),
                alt: "Pain aux sesame"
            },
            inStock: false,
            quantity: 1,
            category: "Pains 🥖"
        },
        {
            name: "Pain aux olives",
            price: 3.90,
            image: {
                source: require("@/assets/images/boulangerie/pain-aux-olives.jpeg"),
                alt: "Pain aux olives"
            },
            inStock: true,
            quantity: 1,
            category: "Pains 🥖"
        },
        {
            name: "Pain de seigle",
            price: 3.90,
            image: {
                source: require("@/assets/images/boulangerie/pain-seigle.jpg"),
                alt: "Pain de seigle"
            },
            inStock: true,
            quantity: 1,
            category: "Pains 🥖"
        },
        {
            name: "Pain au maïs",
            price: 3.90,
            image: {
                source: require("@/assets/images/boulangerie/pain-mais.jpg"),
                alt: "Pain au maïs"
            },
            inStock: true,
            quantity: 1,
            category: "Pains 🥖"
        },

    ]
    };
  },
}
</script>


<style scoped lang="scss">

@import "@/styles/products.scss";

</style>