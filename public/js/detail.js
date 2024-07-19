document.addEventListener('DOMContentLoaded', async function () {
    //tomo el boton de carrito
    const buttonDesktop = document.querySelectorAll('.addToCart');
    //tomo input y botones de cantidad
    const quantityInput = document.querySelector('.quantity')
    const quantityMore = document.querySelector('.quantityMore');
    const quantityLess = document.querySelector('.quantityLess');
    const stock = document.querySelector('.stock');

    quantityMore.addEventListener('click', function () {
        if (quantityInput.value < parseInt(stock.textContent)) {
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
            //selecciono el precio de la carta
            const cardPriceSelect = document.querySelector(".cardPriceSpan");
            const cardPrice = cardPriceSelect.textContent;

            let addedCard =
            {
                id: cardId,
                title: cardTitle,
                img: cardImg,
                quantity: cardQuantity,
                price: cardPrice
            }

            const existingItem = cart.find(existing => existing.id === addedCard.id);

            if (existingItem) {
                // Actualiza la cantidad sumando la nueva cantidad
                existingItem.quantity = (parseInt(existingItem.quantity) + parseInt(addedCard.quantity)).toString();
            } else {
                // Si el objeto no existe, agrégalo al carrito
                cart.push(addedCard);
            }
            
            //cart.push(addedCard)
            const cartJSON = JSON.stringify(cart);
            sessionStorage.setItem("cart", cartJSON);

            console.log('carrito', cart)

            Toastify({
                text: "¡Agregado exitosamente!",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#000",
                },
                onClick: function(){}
            }).showToast();
        });
    });
})