<template>
    <div class="delivery">
            <h1>Livraison</h1>
            
            <BasketItem />
            
        <div class="form">
            <DeliveryForm />
            <PaymentCardApp />
        </div>
    </div>
</template>

<script>
import BasketItem from "@/components/BasketItem.vue";
import PaymentCardApp from "@/components/PaymentCardApp.vue";
import DeliveryForm from "@/components/DeliveryForm.vue";

export default {
    components: {
    BasketItem,
    DeliveryForm,
    PaymentCardApp,
}
}
</script>

<style scoped>
.delivery {
    text-align: center;
    .form {
        display: flex;
    }
}
</style>