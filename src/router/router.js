import { createWebHistory, createRouter } from 'vue-router';
import Nav from '@/components/NavApp.vue'
import Header from '@/components/HeaderApp.vue'
import Cart from '@/components/CartApp.vue'
import Footer from '@/components/FooterApp.vue'
//products
import BakeryView from '@/views/BakeryView.vue'
import ViennesieView from '@/views/ViennesieView.vue'
import CakeView from '@/views/CakeView.vue'
import SnackingView from '@/views/SnackingView.vue'
import DrinkView from '@/views/DrinkView.vue'
// View
import Home from "@/views/HomeView.vue"
import Concept from '@/views/ConceptView.vue'
import ProductsList from "@/views/ProductsList.vue"
import Contact from "@/views/ContactView.vue"
//Basket
import BasketView from '@/views/BasketView.vue'
import BasketApp from '@/components/BasketApp.vue'
import BasketItem from '@/components/BasketItem.vue'
// Payement
import PaymentCardApp from "@/components/PaymentCardApp.vue"
import PaymentView from "@/views/PaymentView.vue";
import PaymentTakeAway from "@/views/PaymentTakeAway.vue"
import PaymentDelivery from "@/views/PaymentDelivery.vue"
import DeliveryForm from "@/components/DeliveryForm.vue"



const routes = [
    {
        path: '/',
        name: "HomeView",
        component: Home
    },
    {
        path: '/',
        name: "NavApp",
        component: Nav,
    },
    { 
        path: '/Home', 
        name: "HeaderApp",
        component: Header 
    },
    { 
        path: '/panier', 
        name: "Basket",
        component: BasketView
    },
    {
        path: '/concept',
        name: "Concept",
        component: Concept
    },
    {
        path: '/produits',
        name: "Products",
        component: ProductsList
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
    },
    { 
        path: '/', 
        name: "Cart",
        component: Cart 
    },
    {
        path: '/Boulangerie',
        name: "Bakery",
        component: BakeryView
    },
    {
        path: '/Viennoiseries',
        name: "Viennesie",
        component: ViennesieView
    },
    {
        path: '/Patisseries',
        name: "Cake",
        component: CakeView
    },
    {
        path: '/Snacking',
        name: "Snacking",
        component: SnackingView
    },
    {
        path: '/Boissons',
        name: "Drink",
        component: DrinkView
    },
    {
        path: '/',
        name: "BasketApp",
        component: BasketApp
    },
    {
        path: '/panier',
        name: "BasketItem",
        component: BasketItem
    },
    { 
        path: '/', 
        name: "FooterApp",
        component: Footer 
    },
    {
        path: "/paiement",
        name: "PaymentView",
        component: PaymentView,
    },
    {
        path: "/paiement",
        name: "PaymentCardApp",
        component: PaymentCardApp,
    },
    {
        path: "/a_emporter",
        name: "PaymentTakeAway",
        component: PaymentTakeAway,
    },
    {
        path: "/livraison",
        name: "PaymentDelivery",
        component: PaymentDelivery,
    },
    { 
        path: "/",
        name: "DeliveryForm",
        component: DeliveryForm,
    }

]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;