<template>
    <div class="products">
        <div class="top">
            <h1>Notre sélection de {{ boissons[0].category }}</h1>
            <p>
            Découvrez un monde de boissons rafraîchissantes et classiques, où la simplicité des saveurs intemporelles est à l'honneur. <br>
            Chez nous, nous célébrons les incontournables, offrant une gamme de boissons qui évoquent la nostalgie et la fraîcheur. <br>
            Laissez-vous tenter par des choix familiers qui vous rappelleront de doux souvenirs à chaque dégustation.
            </p>
        </div>
            <section class="menu">
                <div v-for="item in boissons" :key="item.name" class="menu-item">
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

        boissons: [
       
            {
                name: "Pulco Citronnade",
                price: 2.90,
                image: {
                    source: require("@/assets/images/drink/pulco.jpg"),
                    alt: "Pulco Citronnade"
                },
                inStock: true,
                quantity: 1,
                category: "Boissons 🥤"
            },
            {
                name: "Coca Cola",
                price: 2.90,
                image: {
                    source: require("@/assets/images/drink/coca.jpg"),
                    alt: "Coca Cola"
                },
                inStock: true,
                quantity: 1,
                category: "Boissons 🥤"
            },
            {
                name: "Coca Cola Zéro",
                price: 2.90,
                image: {
                    source: require("@/assets/images/drink/coca-zero.jpg"),
                    alt: "Coca Cola Zéro"
                },
                inStock: true,
                quantity: 1,
                category: "Boissons 🥤"
            }, 
            {
                name: "Perrier",
                price: 2.90,
                image: {
                    source: require("@/assets/images/drink/perrier.jpg"),
                    alt: "Perrier"
                },
                inStock: true,
                quantity: 1,
                category: "Boissons 🥤"
            },
            {
                name: "Oasis Tropical",
                price: 2.90,
                image: {
                    source: require("@/assets/images/drink/oasis.jpg"),
                    alt: "Oasis Tropical"
                },
                inStock: true,
                quantity: 1,
                category: "Boissons 🥤"
            },
            {
                name: "Fuze Tea Pêche",
                price: 2.90,
                image: {
                    source: require("@/assets/images/drink/fuzetea.jpg"),
                    alt: "Fuze Tea Pêche"
                },
                inStock: true,
                quantity: 1,
                category: "Boissons 🥤"
            },
            
        ],
    };
  },
}
</script>

<style scoped lang="scss">

@import "@/styles/products.scss";

</style>