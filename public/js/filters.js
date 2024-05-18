document.addEventListener('DOMContentLoaded', async function () { 
    //fetch
    const data = await fetch('/api/test')
    const cards = await data.json()

    const contentDisplay = document.querySelector('.contentDisplay')

    const minPrice = document.getElementById('precioMinimo')
    const maxPrice = document.getElementById('precioMaximo')
    const applyFilters = document.getElementById('buttonFilters')
    const colores = document.querySelectorAll('.color')
    const keyword = document.querySelector('#busquedaSection')
    let inputValue = "";

    minPrice.addEventListener('input', function (e) {
        let value = parseInt(e.target.value);
        if (isNaN(value)) {
            e.target.value = "";
        } else if (value <= 0) {
            e.target.value = "0";
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

    function buscarCartas(cards) {
        // contentDisplay.innerHTML = "";
        const cartasEncontradas = [];
        const palabraClaveMayuscula = keyword.value.toUpperCase();
      
        for (const carta of cards) {
          const titulo = carta.title.toUpperCase();
          if (titulo.includes(palabraClaveMayuscula)) {
            cartasEncontradas.push(carta);
          }
        }
        // for (const carta of cards) {
        //     const titulo = carta.title.toUpperCase();
        //     if (titulo.includes(palabraClaveMayuscula)) {
        //       if (carta.price <= minPrice && carta.price >= maxPrice) {
        //         cartasEncontradas.push(carta);
        //       }
        //     }
        //   }
        return cartasEncontradas;
    }

    // const captureFiltersValue = () => {
    //     const minPriceValue = parseFloat(minPrice.value);
    //     const maxPriceValue = parseFloat(maxPrice.value);
    //     const activeImages = document.querySelectorAll('.activeColors');
    //     const keyWordValue = keyword.value;
    
    //     console.log('Precio Minimo', minPriceValue)
    //     console.log('Precio Maximo', maxPriceValue)
    //     console.log('Keyword', keyWordValue)
    //     activeImages.forEach((button, index) => {
    //         console.log(`Color ${index + 1}`, button.id);
    //     });
    // }
      
    applyFilters.addEventListener('click', () => {
        // captureFiltersValue()
        const minPriceValue = parseFloat(minPrice.value);
        const maxPriceValue = parseFloat(maxPrice.value);
        const activeImages = document.querySelectorAll('.activeColors');
        const keyWordValue = keyword.value;
    
        console.log('Precio Minimo', minPriceValue)
        console.log('Precio Maximo', maxPriceValue)
        console.log('Keyword', keyWordValue)
        activeImages.forEach((button, index) => {
            console.log(`Color ${index + 1}`, button.id);
        });

        const cartasEncontradas = buscarCartas(cards);
        console.log('Cartas encontradas:', cartasEncontradas);

            // Filtrar las cartas según el precio
        const cartasFiltradas = [];
        for (const carta of cartasEncontradas) {
            if (carta.price >= minPriceValue && carta.price <= maxPriceValue) {
                cartasFiltradas.push(carta);
            }
        }

    console.log('Cartas encontradas (filtradas por precio):', cartasFiltradas);
    });
})