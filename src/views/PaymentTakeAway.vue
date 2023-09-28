<template>
    <div class="take_away">
        <h1>À emporter</h1>
        <BasketItem />

    </div>
</template>


<script>
import BasketItem from "@/components/BasketItem.vue";

export default {
    components: {
        BasketItem,
    }
}
</script>

<style scoped>
.take_away {
    text-align: center;
}
</style>