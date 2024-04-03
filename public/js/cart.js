document.addEventListener('DOMContentLoaded', async function () {
        
    //llamo a cart del sessionStorage metiendolo en variable carrito
    const carrito = JSON.parse(sessionStorage.getItem("cart"));

    console.log('carrito', carrito)
})