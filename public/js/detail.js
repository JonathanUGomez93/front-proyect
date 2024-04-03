document.addEventListener('DOMContentLoaded', async function () {
    //tomo el boton de carrito
    const buttonDesktop = document.querySelectorAll('.addToCart');
    //tomo input y botones de cantidad
    const quantityInput = document.querySelector('.quantity')
    const quantityMore = document.querySelector('.quantityMore');
    const quantityLess = document.querySelector('.quantityLess');
    const stock = document.querySelector('.stock');

    quantityMore.addEventListener('click', function () {
        if (quantityInput.value < stock.textContent) {
            quantityInput.value++
        }
    })

    quantityLess.addEventListener('click', function () {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    })
    
    buttonDesktop.forEach(function (item) {
        item.addEventListener('click', function () {
            this.style.backgroundColor = 'red';

            let cart = JSON.parse(sessionStorage.getItem('cart'));
            if (!cart) {
                cart = [];
            }
            
            //selecciono el titulo de la carta
            const cardTitleSelect = document.querySelector('.cardTitle');
            const cardTitle = cardTitleSelect.textContent;
            //selecciono la img de la carta
            const cardImgSelect = document.querySelector('.cardImg');
            const cardImgSrc = cardImgSelect.src;
            const cardImg = new URL(cardImgSrc).pathname;
            //selecciono el id de la carta tomandolo de los params de la url
            const cardIdUrl = window.location.href;
            const urlParts = cardIdUrl.split("/");
            const cardId = urlParts[urlParts.length - 1];
            const cardQuantity = quantityInput.value;

            let addedCard =
            {
                id: cardId,
                title: cardTitle,
                img: cardImg,
                quantity: cardQuantity
            }
            
            cart.push(addedCard)
            const cartJSON = JSON.stringify(cart);
            sessionStorage.setItem("cart", cartJSON);

            console.log('carrito', cart)
        });
    });
})