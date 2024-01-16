window.onload = function () {
    const burger = document.querySelector('.burgerMenu')
    const menu = document.querySelector('.seccionesNav');
    const closeMenu = document.querySelector('.closeBurger')

    burger.addEventListener('click', () => {
        menu.classList.add('visibility')
    })
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('visibility')
    });
}