import Cleave from 'cleave.js';

export function initPaymentForm() {
 // Sélectionnez les éléments DOM
const fields = document.querySelectorAll('input');
const zoomBtns = document.querySelectorAll('.zoomBtn');
const closeBtns = document.querySelectorAll('.closeBtn');
const overlay = document.querySelector('.overlay');

let selectedCardIcon;

// Ajoutez des écouteurs d'événements pour le focus et le flou des champs
fields.forEach(field => {
  field.addEventListener('focus', function () {
    this.parentNode.classList.add('focus');
    this.parentNode.classList.remove('active');
  });

  field.addEventListener('blur', function () {
    this.parentNode.classList.remove('focus');

    if (this.value !== "") {
      this.parentNode.classList.add('active');
    } else {
      this.parentNode.classList.remove('active');
    }
  });
});

// Fonction pour fermer le zoom
function closeZoom() {
  closeBtns.forEach(closeBtn => {
    closeBtn.parentNode.classList.remove('zoomOn');
  });
  overlay.classList.remove('open');
}

// Ajoutez des écouteurs d'événements pour le zoom et la fermeture du zoom
zoomBtns.forEach(zoomBtn => {
  zoomBtn.addEventListener('click', function () {
    this.parentNode.classList.add('zoomOn');
    overlay.classList.add('open');
  });
});

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
    closeZoom();
  });
});

overlay.addEventListener('click', function () {
  closeZoom();
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeZoom();
  }
});

// Configuration de Cleave.js pour la saisie de la carte de crédit
new Cleave('.credit_card_number', {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    if (selectedCardIcon) {
      selectedCardIcon.classList.remove('active');
    }

    selectedCardIcon = document.querySelector('.icon-' + type);

    if (selectedCardIcon) {
      selectedCardIcon.classList.add('active');
    }
  }
});

}