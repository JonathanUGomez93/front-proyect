document.addEventListener('DOMContentLoaded', async function () {
    //llamo a cart del sessionStorage metiendolo en variable carrito
    let carrito = JSON.parse(sessionStorage.getItem('cart')) || [];
    console.log('carrito inicial',carrito)

    const container = document.querySelector('.container');

    const displayCart = () => {
        // Limpiar el contenedor del carrito
        container.innerHTML = '';
    
        carrito.forEach((item, index) => {
            // Crear div de producto individual
            const itemContainer = document.createElement('div');
            container.appendChild(itemContainer);
    
            // Título de los productos
            const itemTitle = document.createElement('p');
            itemTitle.textContent = item.title;
            itemContainer.appendChild(itemTitle);
    
            // Imágenes de los productos
            const itemImage = document.createElement('img');
            itemImage.src = item.img;
            itemContainer.appendChild(itemImage);
    
            // Cantidad de productos
            const itemQuantity = document.createElement('p');
            itemQuantity.textContent = item.quantity;
            itemContainer.appendChild(itemQuantity);
    
            // Precio unitario de los productos
            const itemPrice = document.createElement('p');
            itemPrice.textContent = item.price;
            itemContainer.appendChild(itemPrice);
    
            // Precio total de cada producto
            const itemTotal = document.createElement('p');
            itemTotal.textContent = item.price * item.quantity;
            itemContainer.appendChild(itemTotal);
    
            // Botón para eliminar el producto del carrito
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', function () {
                // Eliminar el item del carrito
                carrito = carrito.filter((_, itemIndex) => itemIndex !== index);

                // Guardo carrito en el sessionStorage
                sessionStorage.setItem('cart', JSON.stringify(carrito));
                console.log('carrito updated', carrito)
                
                displayCart();
            });
            itemContainer.appendChild(removeBtn);
        });
    };
    displayCart()
})