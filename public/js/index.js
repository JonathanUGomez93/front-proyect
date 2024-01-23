window.onload = function () {
    const container = document.querySelector('.container')
        
    const fetchTresCartas = () => {
        fetch("https://api.magicthegathering.io/v1/cards")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const cards = [];
            let count = 0;
            for (let i = 0; i < data.cards.length; i++){
                if (data.cards[i].imageUrl !== undefined && count < 3) {
                    cards.push(data.cards[i])
                    count++;
                }
                if (count === 3) {
                    break;
                }
            }
            console.log('cards luego del for' , cards)
            
            cards.forEach((carta) => {
                    const img = document.createElement("img");
                    img.src = carta.imageUrl;
    
                    container.appendChild(img);
            });
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    // fetchTresCartas()
};