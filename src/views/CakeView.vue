<template>
    <div class="products">
        <div class="top">
            <h1>Notre sélection de {{ patisseries[0].category }}</h1>
            <p>
            Explorez un monde de délices sucrés et découvrez les créations exquises de notre talentueux pâtissier. <br>
            Chez nous, l'artisanat rencontre l'élégance, offrant des pâtisseries saisonnières éblouissantes. <br>
            Laissez-vous tenter par des saveurs uniques qui éveilleront vos sens à chaque bouchée.
        </p>
        </div>
            <section class="menu">
                <div v-for="item in patisseries" :key="item.name" class="menu-item">
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

        patisseries: [
       
            {
                name: "Tarte à la pistache",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/tarte-pistache.jpg"),
                    alt: "Tarte aà la pistache"
                },
                inStock: false,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Cheescake Yuzu",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/cheescake-yuzu.jpg"),
                    alt: "Cheescake Yuzu"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Tarte aux fruits",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/tarte-fruits.jpg"),
                    alt: "Tarte aux fruits"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Tarte aux citrons",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/tarte-citron.jpg"),
                    alt: "Tarte aux noisettes"
                },
                inStock: false,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Tarte à la figue",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/tarte-figue.jpg"),
                    alt: "Tarte à la figue"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Tarte aux poires",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/tarte-poire.jpg"),
                    alt: "Tarte aux poires"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Mille feuilles",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/millefeuilles.jpg"),
                    alt: "Mille feuilles"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Baba au rhum",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/baba-au-rhum.jpg"),
                    alt: "Baba au rhum"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            {
                name: "Croustillant chocolat",
                price: 2.90,
                image: {
                    source: require("@/assets/images/patisserie/croustillant-chocolat.jpg"),
                    alt: "Croustillant chocolat"
                },
                inStock: true,
                quantity: 1,
                category: "Pâtisseries 🍰"
            },
            
        ],
    };
  },
}
</script>

<style scoped lang="scss">

@import "@/styles/products.scss";

</style>