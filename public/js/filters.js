document.addEventListener('DOMContentLoaded', async function () { 
    const minPrice = document.getElementById('precioMinimo')
    const maxPrice = document.getElementById('precioMaximo')
    const applyFilters = document.getElementById('buttonFilters')
    const colores = document.querySelectorAll('.color')
    const keyword = document.querySelector('#busquedaSection')
    let inputValue = '';

    minPrice.addEventListener('input', function (e) {
        let value = parseInt(e.target.value);
        if (isNaN(value)) {
            e.target.value = "";
        } else if (value <= 0) {
            e.target.value = "1";
        } else if (value > 499) {
            e.target.value = "499";
        }
    });

    maxPrice.addEventListener('input', function (e) {
        let value = parseInt(e.target.value);
        if (isNaN(value)) {
            e.target.value = "";
        } else if (value <= 0) {
            e.target.value = "2";
        } else if (value > 500) {
            e.target.value = "500";
        }
    });
    
    colores.forEach((color) => {
        color.addEventListener('click', () => {
            color.classList.toggle('activeColors');
        });
    });

    keyword.addEventListener('input', (event) => {
        inputValue = event.target.value;
    });

    applyFilters.addEventListener('click', () => {
        const minPriceValue = minPrice.value;
        const maxPriceValue = maxPrice.value;
        const activeImages = document.querySelectorAll('.activeColors');
        const keyWordValue = keyword.value;
    
        console.log('Precio Minimo', minPriceValue)
        console.log('Precio Maximo', maxPriceValue)
        console.log('Keyword', keyWordValue)
        activeImages.forEach((button, index) => {
            console.log(`Color ${index + 1}`, button.id);
        });
    });
})

//PREGUNTAR A LA IA COMO PONER LO QUE HAY EN CONTENT DISPLAY PARA QUE LO HAGA MI CONTROLADOR. Y GG IZI.