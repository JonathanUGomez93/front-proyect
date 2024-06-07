document.addEventListener('DOMContentLoaded', async function () {
    //fetch a API
    const data = await fetch('/api/test')
    const cards = await data.json()
    //input de busqueda
    const searchInput = document.querySelector('.inputNav')
    //botón de buscar
    const searchButton = document.querySelector('.searchButtonNav')
    //array de resultados
    const result = [];
    //valor del input
    let inputValue = "";
    searchInput.addEventListener('blur', function() {
        inputValue = searchInput.value.toLowerCase();

        if (inputValue.length >= 3) {
            // console.log('valor de inputValue', inputValue)
            for (let i = 0; i < cards.length; i++){
                if (cards[i].title.toLowerCase().includes(inputValue)&& !result.includes(cards[i])){
                    result.push(cards[i])
                }
            }
            console.log(result)
        }
    });
})