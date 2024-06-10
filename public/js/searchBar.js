document.addEventListener('DOMContentLoaded', async function () {
    const data = await fetch('/api/test')
    const cards = await data.json()

    const searchInput = document.querySelector('.inputNav')
    const searchButton = document.querySelector('.searchButtonNav')
    const inputContainer = document.getElementById('inputContainer')
    const inputResultsContainer = document.createElement('div')

    const result = [];
    let inputValue = "";

    const resultsDisplay = () => {
        cards.forEach(card => {
            if (card.title.toLowerCase().includes(inputValue)) {
                const inputCards = document.createElement('p')
                inputCards.textContent = `${card.title}`
                inputResultsContainer.appendChild(inputCards)
                inputContainer.appendChild(inputResultsContainer)
            }
        });
    }

    searchInput.addEventListener('input', function() {
        inputValue = searchInput.value.toLowerCase();

        if (inputValue.length >= 3) {
            for (let i = 0; i < cards.length; i++){
                if (cards[i].title.toLowerCase().includes(inputValue)&& !result.includes(cards[i])){
                    result.push(cards[i])
                }
            }
            console.log(result)
            inputResultsContainer.textContent = "";
            resultsDisplay()
        }
    });
})