<template>
    <div class="concept">

        <h1>
            CLIQUEZ, <br>
            CRAQUEZ, <br>
            CROQUEZ !
        </h1>
        <div class="click box">
            <img src="@/assets/concept/bag.png" alt="sac">
        <h3>CLICK & COLLECT</h3>
        <p> 
            RETIREZ VOTRE COMMANDE
            DANS VOTRE BOULANGERIE
            PRÉFÉRÉE.
        </p>
        </div>

        <div class="delivery box">
            <img src="@/assets/concept/bike.png" alt="vélo">

            <h3>
                LIVRAISON
            </h3>
            <p>
                EN VÉLO OU EN VOITURE
                CHEZ VOUS OU AU BUREAU
                FAITES VOUS LIVRER.
            </p>
        </div>

        <div class="spot box">
            <img src="../assets/concept/chair.png" alt="chaise">
            <h3>
                SUR PLACE
            </h3>
            <p>
                DÉCOUVREZ NOS ESPACES
                DÉGUSTATION
            </p>
        </div>

    </div>
</template>


<style scoped lang="scss">
.concept {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20vh;

    h3 {
        color: orange;
    }
    .box {
        width: 17vw;
        border-bottom: 5px solid orange;
    }
}
</style>