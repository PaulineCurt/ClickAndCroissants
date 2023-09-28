<template>
<div class="container">
  
  <h1>Formulaire de paiement</h1>
  
  <span class="fieldRow">
    <input id="name" type="name" placeholder="" />
    <label for="name">Prénom</label>
    <i for="name" class="fa fa-user"></i>
  </span>
  
  <span class="fieldRow">
    <input id="surname" type="name" placeholder="" />
    <label for="surname">Nom</label>
    <i for="surname" class="fa fa-user"></i>
  </span>
  
  <div class="blank_space">
    <span class="fieldRow credit_card">
      <input id="cc" class="credit_card_number" type="text" placeholder="" />
      <label for="cc">N° de carte</label>
      <i for="cc" class="fa fa-credit-card"></i>
      <div class="zoomBtn">ZOOM</div>
      <div class="closeBtn"><i class="fa fa-times"></i></div>
    </span> 
  </div>

  <span class="fieldRow col2">
    <input id="cvv" type="text" placeholder="XXX" />
    <label for="cvv">CVV</label>
    <i for="cvv" class="fa fa-lock"></i> 
   </span>
 
   <span class="fieldRow col2 last">
    <input id="date" type="text" placeholder="mois/année" />
    <label for="date">Date d'expiration</label>
    <i for="date" class="fa  fa-calendar"></i>
   </span>

   <button type="submit" @click="afficherAlerte">Payer maintenant</button>

</div>

<div class="overlay"></div>

</template>


<script>
import { initPaymentForm } from "@/scripts/cb.js";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
    name: 'PaymentCardApp',
   
  mounted() {
    // Appelez la fonction d'initialisation du script
    initPaymentForm();
  },

  methods: {
    afficherAlerte() {
      Swal.fire({
      position: 'center',
      icon: 'success', // Assurez-vous que vous avez spécifié 'success'
      title: 'Votre paiement a été effectué avec succès',
      showConfirmButton: false,
      timer: 1500
    });
    }
  }
};
</script>

<style scoped lang="scss">

@import '@/styles/form.scss';

</style>
