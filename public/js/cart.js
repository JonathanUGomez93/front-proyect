document.addEventListener('DOMContentLoaded', async function () {
    //llamo a cart del sessionStorage metiendolo en variable carrito
    let carrito = JSON.parse(sessionStorage.getItem('cart')) || [];

    const container = document.querySelector('.container');
    const buyDeleteContainer = document.querySelector('.buyDeleteContainer');
    const footer = document.querySelector('footer')

    if (carrito.length === 0) {
        footer.classList.add('emptyCart')
    }

    const displayCart = () => {
        container.innerHTML = '';
    
        carrito.forEach((item, index) => {
            // Crear div de producto individual
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('itemContainer')
            container.appendChild(itemContainer);

            //div boton eliminar
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer')
            itemContainer.appendChild(buttonContainer);

            //div button&Image
            const buttonImage = document.createElement('div');
            buttonImage.classList.add('buttonNImage')
            itemContainer.appendChild(buttonImage);

            // Botón para eliminar el producto del carrito
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.classList.add('removeBtn');
            removeBtn.addEventListener('click', function () {
                // Eliminar el item del carrito
                carrito = carrito.filter((_, itemIndex) => itemIndex !== index);

                // Guardo carrito en el sessionStorage
                sessionStorage.setItem('cart', JSON.stringify(carrito));
                console.log('carrito updated', carrito)

                payment()
                displayCart();
            });
            buttonContainer.appendChild(removeBtn);
            
            // Imágenes de los productos
            const itemImage = document.createElement('img');
            itemImage.src = item.img;
            itemImage.classList.add('itemImage')
            buttonImage.appendChild(itemImage);            
            
            //infoContainer div
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('infoContainer')
            itemContainer.appendChild(infoContainer);
            
            // Título de los productos
            const itemTitle = document.createElement('p');
            itemTitle.textContent = `${item.title}`;
            itemTitle.classList.add('itemTitle')
            infoContainer.appendChild(itemTitle);
    
            // Cantidad de productos
            const itemQuantity = document.createElement('p');
            itemQuantity.textContent =`Cantidad: ${ item.quantity }`;
            itemQuantity.classList.add('itemQuantity')
            infoContainer.appendChild(itemQuantity);
    
            // Precio unitario de los productos
            const itemPrice = document.createElement('p');
            itemPrice.textContent =`Precio Unitario: $${item.price}`;
            itemPrice.classList.add('itemPrice')
            infoContainer.appendChild(itemPrice);
    
            // Precio total de cada producto
            const itemTotal = document.createElement('p');
            itemTotal.textContent =`Precio Total: $${ item.price * item.quantity}`;
            itemTotal.classList.add('itemTotal')
            infoContainer.appendChild(itemTotal);
        });
    };
    displayCart()

    //Calculo Total a Pagar
    const totalPayment = document.querySelector('.totalPayment')
    const totalPaymentP = document.createElement('p')
    
    const payment = () => {
    
        let totalAcumulado = 0;

        carrito.forEach(item => {
            let precioTotalItem = item.price * item.quantity;
            totalAcumulado += precioTotalItem;
        });
        
        totalPaymentP.textContent = `Total A Pagar: $${totalAcumulado}`;
        totalPayment.appendChild(totalPaymentP)
    }
    payment()

    //borro todo el carrito de compras
    const emptyCart = () => {
        if (carrito.length > 0) {
            carrito = [];
            sessionStorage.removeItem('cart');
            console.log("El carrito se ha vaciado correctamente.");
        } else {
            console.log("El carrito ya está vacío.");
        }
        payment()
        displayCart()
    }

    //Rancio cartelito de gracias por su compra
    const purchaseSign = () => {
        const purchaseSign = document.querySelector('.purchaseSign')
        //contenedor del cartel
        const signContainer = document.createElement('div')
        signContainer.classList = 'purchaseSignContainer'
        purchaseSign.appendChild(signContainer)

        //mensaje del cartel
        const signTitle = document.createElement('p')
        signTitle.classList = 'purchaseSignTitle'
        signTitle.textContent = '¡Gracias por su compra!'
        signContainer.appendChild(signTitle)

        //mensaje directo de redirección
        const signRedirect = document.createElement('a')
        signRedirect.classList = 'purchaseSignRedirect'
        signRedirect.textContent = 'Haz click aquí'
        signRedirect.href = '/'
        signContainer.appendChild(signRedirect)

        //mensaje final
        const signFinal = document.createElement('p')
        signFinal.classList = 'purchaseSignFinal'
        signFinal.textContent = 'si no eres redirigido automáticamente en 5 segundos'
        signContainer.appendChild(signFinal)
    }

    //Boton de comprar
    const buyButton = document.createElement('button')
    buyButton.textContent = 'Comprar'
    buyButton.classList = 'buyButton'
    buyButton.addEventListener('click', () => {
        purchaseSign()
        buyButton.disabled = true;
        setTimeout(() => {
            window.location.href = '/';
            emptyCart()
        }, 5000)
    })
    buyDeleteContainer.appendChild(buyButton)

    //Boton de borrado general
    const emptyCartButton = document.createElement('button')
    emptyCartButton.textContent = 'Borrar Todo'
    emptyCartButton.classList = 'emptyCartButton'
    emptyCartButton.addEventListener('click', () => {
        emptyCart()
    })
    buyDeleteContainer.appendChild(emptyCartButton)
})