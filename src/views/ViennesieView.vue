<template>
    <div class="products">
        <div class="top">
            <h1>Notre sélection de {{ viennoiseries[0].category }}</h1>
                <p> Découvrez notre irrésistible sélection de viennoiseries fraîchement préparées, <br>
                    confectionnées avec amour pour égayer vos journées. Plongez dans notre univers de viennoiseries <br>
                    où un simple clic vous permet de savourer des délices gourmands à tout moment.
                </p>
        </div>
            <section class="menu">
                <div v-for="item in viennoiseries" :key="item.name" class="menu-item">
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

        viennoiseries: [
            {
                name: "Croissant",
                price: 1.35,
                image: {
                    source: require("@/assets/images/viennoiseries/croissants.jpg"),
                    alt: "Croissant"
                },
                inStock: true,
                quantity: 1,
                category: "Viennoiseries 🥐"
            },
            {
                name: "Pain au chocolat",
                price: 1.45 ,
                image: {
                    source: require("@/assets/images/viennoiseries/pain-au-chocolat.jpg"),
                    alt: "Pain au chocolat"
                },
                inStock: true,
                quantity: 1,
                category: "Viennoiseries 🥐"
            },
            {
                name: "Croissant aux amandes",
                price: 1.80,
                image: {
                    source: require("@/assets/images/viennoiseries/croissants-amandes.jpg"),
                    alt: "Croissant aux amandes"
                },
                inStock: true,
                quantity: 1,
                category: "Viennoiseries 🥐"
            },
            {
                name: "Chausson aux pommes",
                price: 2 ,
                image: {
                    source: require("@/assets/images/viennoiseries/chaussons.png"),
                    alt: "Chausson aux pommes"
                },
                inStock: true,
                quantity: 1,
                category: "Viennoiseries 🥐"
            },            
            {
                name: "Chouquettes x10",
                price: 3,
                image: {
                    source: require("@/assets/images/viennoiseries/chouquettes.jpg"),
                    alt: "Chouquettes"
                },
                inStock: false,
                quantity: 1,
                category: "Viennoiseries 🥐"
            },
            {
                name: "Pains aux raisins",
                price: 1.75,
                image: {
                    source: require("@/assets/images/viennoiseries/pains-aux-raisins.jpg"),
                    alt: "Pains aux raisins"
                },
                inStock: true,
                quantity: 1,
                category: "Viennoiseries 🥐"
            },

        ]
    };
  },
}
</script>

<style scoped lang="scss">

@import "@/styles/products.scss";

</style>