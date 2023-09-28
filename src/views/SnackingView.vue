<template>
    <div class="products">
        <div class="top">
            <h1>Notre sélection de {{ snacking[0].category }}</h1>
                <p> Explorez notre délicieuse gamme de collations salées et de salades fraîches. <br>
                    Des sandwichs savoureux, des salades légères et bien plus encore pour satisfaire vos envies de saveurs salées. <br>
                    Découvrez l'art du snacking chez nous !
                </p>
        </div>
            <section class="menu">
                <div v-for="item in snacking" :key="item.name" class="menu-item">
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

        snacking: [
            {
                name: "Salade césar",
                description: "Poitrine de poulet entièrement naturelle, croûtons au levain, parmesan, laitue romaine, vinaigrette César.",
                price: 12.90,
                image: {
                    source: require("@/assets/images/snacking/salade-césar.jpg"),
                    alt: "Salade césar"
                },
                inStock: true,
                quantity: 1,
                category: "Snacking 🍔"
            },
            {
                name: "Salade BBQ",
                description: "Poitrine de poulet entièrement naturelle, laitue romaine hachée, maïs rôti au feu, mélange de haricots noirs, poivrons et oignons, moitiés de tomates raisins, sauce barbecue sucrée et piquante, lanières de tortilla croquantes.",
                price: 12.90,
                image: {
                    source: require("@/assets/images/snacking/salade-bbq.jpg"),
                    alt: "Salade BBQ"
                },
                inStock: true,
                quantity: 1,
                category: "Snacking 🍔"            
            },         
            {
                name: "Salade Oeufs",
                description: "Poitrine de poulet en dés entièrement naturelle, fromage bleu, bacon fumé au bois de pommier, œuf haché, tomates, laitue romaine chiffonnade, vinaigrette ranch",
                price: 12.90,
                image: {
                    source: require("@/assets/images/snacking/salade-oeuf.jpg"),
                    alt: "Salade Oeufs"
                },
                inStock: true,
                quantity: 1,
                category: "Snacking 🍔"            
            },
            {
                name: "Sandwich Poulet Pesto",
                description: "Poitrine de poulet entièrement naturelle, tomates, roquette, vinaigrette balsamique, mayonnaise au pesto, sur une baguette au levain.",
                price: 8,
                image: {
                    source: require("@/assets/images/snacking/poulet-pesto.jpg"),
                    alt: "Sandwich Poulet Pesto"
                },
                inStock: true,
                quantity: 1,
                category: "Snacking 🍔"            
            },
 
            {
                name: "Sandwich Avoca",
                description: "Poitrine de dinde, Havarti, avocat écrasé, tomates, laitue, mayonnaise, sur pain multigrains. ",
                price: 7,
                image: {
                    source: require("@/assets/images/snacking/sandwich-avocado.jpeg"),
                    alt: "Sandwich Avoca"
                },
                inStock: true,
                quantity: 1,
                category: "Snacking 🍔"            
            },
            {
                name: "Sandwich au thon",
                description: "Thon, céleri, oignon rouge, persil, tomates, laitue, mayonnaise, levain tranché",
                price: 7,
                image: {
                    source: require("@/assets/images/snacking/sandwich-thon.jpg"),
                    alt: "Sandwich au thon",
                },
                inStock: true,
                quantity: 1,
                category: "Snacking 🍔"            
            },
        ]
    };
  },
}
</script>

<style scoped lang="scss">

@import "@/styles/products.scss";

</style>