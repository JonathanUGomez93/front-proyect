document.addEventListener('DOMContentLoaded', async function () {
    const data = await fetch('/api/test')
    const cards = await data.json()

    const searchInput = document.querySelector('.inputNav')
    const searchButton = document.querySelector('.searchButtonNav')
    const inputResultsParas = document.getElementById('inputResultsParas')

    const result = [];
    let inputValue = "";

    const resultsDisplay = () => {
        result.forEach(card => {
            if (card.title.toLowerCase().includes(inputValue)) {
                const inputCards = document.createElement('a')
                inputCards.href = `/productdetail/${card.id}`
                inputCards.textContent = `${card.title}`
                inputResultsParas.appendChild(inputCards)
            }
        });
    }

    searchInput.addEventListener('input', function() {
        inputValue = searchInput.value.toLowerCase();

        if (inputValue.length >= 3) {
            for (let i = 0; i < cards.length; i++){
                if (cards[i].title.toLowerCase().includes(inputValue)&& !result.includes(cards[i]) && result.length <= 10){
                    result.push(cards[i])
                }
            }
            console.log(result)
            inputResultsParas.textContent = "";
            resultsDisplay()
        }
        if (inputValue.length == 0) {
            inputResultsParas.textContent = '';
        }
    });
})