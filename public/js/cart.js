document.addEventListener('DOMContentLoaded', async function () {
    //llamo a cart del sessionStorage metiendolo en variable carrito
    let carrito = JSON.parse(sessionStorage.getItem('cart')) || [];

    const container = document.querySelector('.container');

    const displayCart = () => {
        // Limpiar el contenedor del carrito
        container.innerHTML = '';
    
        carrito.forEach((item, index) => {
            // Crear div de producto individual
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('itemContainer')
            container.appendChild(itemContainer);

            //div button&Image
            const buttonImage = document.createElement('div');
            buttonImage.classList.add('buttonNImage')
            itemContainer.appendChild(buttonImage);

            //div boton eliminar
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer')
            buttonImage.appendChild(buttonContainer);

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
            itemTitle.textContent = `Carta: ${item.title}`;
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

    let totalAcumulado = 0;

    carrito.forEach(item => {
        let precioTotalItem = item.price * item.quantity;
        totalAcumulado += precioTotalItem;
    });
    
    totalPaymentP.textContent = `Total A Pagar: $${totalAcumulado}`;
    totalPayment.appendChild(totalPaymentP)
})