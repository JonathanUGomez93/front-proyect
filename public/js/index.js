window.onload = function () {
    const container = document.querySelector('#container')
        
    const fetchCartas = () => {
        fetch("https://api.magicthegathering.io/v1/cards")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //acá va la lógica presentacional
            const cards = data.cards;
            console.log('array de cartas', cards)

            cards.forEach((carta) => {
                if (carta.imageUrl !== undefined) {
                    const img = document.createElement("img");
                    img.src = carta.imageUrl;
    
                    container.appendChild(img);
                }
            });
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    fetchCartas()
};