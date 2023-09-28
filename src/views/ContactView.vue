<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center">Formulaire de Contact</h1>
                <form>
                    <div class="mb-3">
                        <label for="prenom" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="prenom" placeholder="Votre prénom">
                    </div>
                    <div class="mb-3">
                        <label for="nom" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="nom" placeholder="Votre nom">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Votre adresse email">
                    </div>
                    <div class="mb-3">
                        <label for="sujet" class="form-label">Sujet</label>
                        <input type="text" class="form-control" id="sujet" placeholder="Sujet de votre message">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Votre message"></textarea>
                    </div>
                    <button type="submit" class="btn">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    input:focus,
    textarea:focus {
        border-color: orange !important; /* !important pour s'assurer que le style prévaut */
        box-shadow: 0 0 5px orange !important; /* Ajoute une légère ombre orange au focus */
    }
    button {
        background-color: orange;
    }
</style>