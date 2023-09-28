<template>
    <div class="payment">
        <div class="cb">
          <h2>Payez par carte bancaire</h2>
          <PaymentCardApp />
        </div>
        <div class="surplace">
    <h2>Payez sur place</h2>
    <p>Vous pourrez payer en espèces lors de votre arrivée.</p>
  </div>

    </div>
  </template>
  
<script>
import PaymentCardApp from "@/components/PaymentCardApp.vue"


export default {
    name: 'PaymentView',
    components: {
        PaymentCardApp,
    }
    
}
</script>

<style scoped lang="scss">
.cb {
    padding: 3vw;
    display: flex;
    align-items: center;

    h2{
        color: orange
    }
}
.surplace {
  text-align: center;
}

</style>