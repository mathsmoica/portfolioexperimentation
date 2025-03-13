'use strict';

// Fonction pour basculer l'état d'un élément
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

// Fonction pour afficher/masquer les détails d'une mission
function toggleDetails(missionId) {
    const missionDetails = document.getElementById(missionId);
    if (missionDetails.style.display === "none" || missionDetails.style.display === "") {
        missionDetails.style.display = "block"; // Afficher les détails
    } else {
        missionDetails.style.display = "none"; // Masquer les détails
    }
}

// Fonction pour ouvrir une popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

// Fonction pour fermer une popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Gestion des clics en dehors des popups pour les fermer
document.addEventListener('click', function (event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Gestion de la touche Escape pour fermer les popups
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
    }
});

// Autres fonctionnalités (sidebar, testimonials, etc.)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
        const avatar = this.querySelector("[data-testimonials-avatar]");
        const title = this.querySelector("[data-testimonials-title]");
        const text = this.querySelector("[data-testimonials-text]");

        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
        modalTitle.innerHTML = title.innerHTML;
        modalText.innerHTML = text.innerHTML;

        testimonialsModalFunc();
    });
}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
// // Fonction pour afficher/masquer les détails de la mission
// function toggleDetails(id) {
//   const details = document.getElementById(id);
//   details.classList.toggle('active');
// }