const burgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".header_nav");

burgerButton.addEventListener('click', showNavigation);

function showNavigation(event){
    burgerButton.classList.toggle('hamburger_active');
    navigation.classList.toggle('navigation_visible');
} 