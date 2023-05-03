// ouverture et fermetur affichage tbody
const tables = document.querySelectorAll('table');
tables.forEach(table => {
    table.addEventListener('click',function() {
        let tbody = table.getElementsByTagName("tbody")[0];
        tbody.classList.toggle("hide");
       }); 
  });

// Récupérer le bouton de menu et la barre latérale
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector(".sidebar");
const themeToggler = document.querySelector("#themecolor")

// Ajouter un écouteur d'événement pour le clic sur le bouton de menu
menuBtn.addEventListener("click", () => {
// Ajouter ou supprimer la classe "active" de la barre latérale
sidebar.classList.toggle("active");
});

// theme dark toogle
themeToggler.addEventListener('click', () => {
document.body.classList.toggle('dark-theme-variables');
themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})