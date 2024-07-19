document.addEventListener('DOMContentLoaded', async function () { 
    const data = await fetch('/api/test')
    const cards = await data.json()

    const contentDisplay = document.querySelector('.contentDisplay')
    const minPrice = document.getElementById('precioMinimo')
    const maxPrice = document.getElementById('precioMaximo')
    const applyFilters = document.getElementById('buttonFilters')
    const colores = document.querySelectorAll('.color')
    const keyword = document.querySelector('#busquedaSection')
    let inputValue = "";

    const cartasValidas = [];

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
        const cartasEncontradas = [];
        const palabraClaveMayuscula = keyword.value.toUpperCase();
      
        for (const carta of cards) {
          const titulo = carta.title.toUpperCase();
          if (titulo.includes(palabraClaveMayuscula)) {
            cartasEncontradas.push(carta);
          }
        }
        return cartasEncontradas;
    }

    const displayFilteredCards = () => {
        contentDisplay.innerHTML = "";
        for (let i = 0; i < cartasValidas.length; i++) {
            const toProductLink = document.createElement('a');
            toProductLink.href = `/productDetail/${cartasValidas[i].id}`
            const imgTag = document.createElement('img');
            imgTag.src = cartasValidas[i].front_img;
            imgTag.className = "img1";
            toProductLink.appendChild(imgTag);
            contentDisplay.appendChild(toProductLink);
        }
    }
    
    applyFilters.addEventListener('click', () => {
        const minPriceValue = parseFloat(minPrice.value);
        const maxPriceValue = parseFloat(maxPrice.value);
        const activeImages = document.querySelectorAll('.activeColors');
        const keyWordValue = keyword.value;

        const cartasEncontradas = buscarCartas(cards);
        console.log('Cartas encontradas:', cartasEncontradas);

            // Filtrar las cartas según el precio
        const cartasFiltradas = [];
        for (const carta of cartasEncontradas) {
            if (carta.price >= minPriceValue && carta.price <= maxPriceValue) {
                cartasFiltradas.push(carta);
            }
        }
        
            //filtro por colores y movimiento al array definitivo
        for (const carta of cartasFiltradas) {
            let colorCoincide = false;
            
            for (const button of activeImages) {
                const colorActivo = button.id;
                if (carta.colors.includes(colorActivo)) {
                    colorCoincide = true;
                    break; 
                }
            }
            if (colorCoincide) {
                cartasValidas.push(carta);
            }
        }
        console.log('Cartas válidas:', cartasValidas);

        displayFilteredCards()

        cartasValidas.length = 0;
    });
})