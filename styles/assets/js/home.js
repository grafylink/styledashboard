const themeToggler = document.querySelector("#themecolor");
themeToggler.addEventListener('click', () => {
document.body.classList.toggle('dark-theme-variables');
themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


//menu responsive burger
const listnav = document.querySelector('.liste-nav');
const btnmenu = document.querySelector('.toogle-nav')

btnmenu.addEventListener('click', () => {
   listnav.classList.toggle('active-nav');
})
