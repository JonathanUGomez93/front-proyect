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

    const addLimit = () => {
        limit += 8
        contentDisplay.innerHTML = '';
        showCards()
    }
    const lessLimit = () => {
        limit = 8
        contentDisplay.innerHTML = "";
        showCards()
    }

    seeMore.addEventListener('click', () => {
        addLimit()
    })
    seeLess.addEventListener('click', () => {
        lessLimit()
    } )
})