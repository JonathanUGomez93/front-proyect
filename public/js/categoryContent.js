document.addEventListener('DOMContentLoaded', async function () {
    const data = await fetch('/api/test')
    const cards = await data.json()

    //container de las cartas
    const contentDisplay = document.querySelector('.contentDisplay')
    const seeMore = document.querySelector('.seeMore')
    const seeLess = document.querySelector('.seeLess')

    //limite de cartas a mostrar
    let limit = 8;
    console.log('limit en js vale ', limit)

    const pathname = window.location.href;
    const partes = pathname.split('/');
    //categoria para filtrar
    const category = partes[partes.length - 1];
    console.log('estoy en la categoria ', category)

    const showCards = () => {
        let displayedCount = 0;
        for (let i = 0; i < cards.length && displayedCount < limit; i++) {
            if (cards[i][category] === true || category === 'allCards') {
                const cardAnchor = document.createElement('a');
                cardAnchor.href = `/productdetail/${cards[i].id}`;
                
                const cardImg = document.createElement('img');
                cardImg.className = 'img1';
                cardImg.src = cards[i].front_img;
                
                cardAnchor.appendChild(cardImg);
                contentDisplay.appendChild(cardAnchor);
                
                displayedCount++;
            }
        }
    };
    showCards()

    seeMore.addEventListener('click', () => {
        addLimit()
    })
    seeLess.addEventListener('click', () => {
        lessLimit()
    })
    //LOGICA APLICADA A LOS FILTROS

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
        cartasValidas.length = 0;
        const cartasEncontradas = [];
        const palabraClaveMayuscula = keyword.value.toUpperCase();
      
        for (const carta of cards) {
            const titulo = carta.title.toUpperCase();
            if (titulo.includes(palabraClaveMayuscula) && carta[category] === true || category === 'allCards') {
            cartasEncontradas.push(carta);
          }
        }
        return cartasEncontradas;
    }

    const displayFilteredCards = () => {
        contentDisplay.innerHTML = "";
        for (let i = 0; i < cartasValidas.length && i < limit; i++) {
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
        displayFilteredCards()
    });

    const addLimit = () => {
        limit += 8
        contentDisplay.innerHTML = '';
        if (cartasValidas.length > 0) {
            displayFilteredCards()
        } else {
            showCards()
        }
    }

    const lessLimit = () => {
        limit = 8
        contentDisplay.innerHTML = "";
        if (cartasValidas.length > 0) {
            displayFilteredCards()
        } else {
            showCards()
        }
    }
})