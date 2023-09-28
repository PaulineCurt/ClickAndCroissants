<template>
<div class="container">
  
  <h1>Informations de livraison</h1>

    <span class="fieldRow col2">
    <input id="name" type="name" placeholder="" />
    <label for="name">Prénom</label>
    </span>

    <span class="fieldRow col2 last">
    <input id="surname" type="name" placeholder="" />
    <label for="surname">Nom</label>
    </span>

    <span class="fieldRow">
    <input id="city" type="name" placeholder="" />
    <label for="city">Ville</label>
    </span>

    <span class="fieldRow">
    <input id="postalCode" type="name" placeholder="" />
    <label for="postalCode">Code postal</label>
    </span>

    <span class="fieldRow">
    <input id="address" type="name" placeholder="" />
    <label for="address">Adresse</label>
    </span>

    <span class="fieldRow">
    <input id="phone" type="name" placeholder="" />
    <label for="phone">Téléphone</label>
    </span>

    <span class="fieldRow">
    <input id="email" type="name" placeholder="" />
    <label for="email">Email</label>
    </span>

    <span class="fieldRow">
    <textarea id="moreInfos" class="form-control" rows="4" placeholder=""></textarea> <br>
    <label for="moreInfos">Informations supplémentaire</label> 
    </span>

    <button type="submit">Enregistrer</button>

</div>
</template>

<style scoped lang="scss">

@import '@/styles/form.scss';

</style>