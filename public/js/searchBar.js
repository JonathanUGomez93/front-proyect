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
    searchInput.addEventListener('input', function() {
        inputValue = searchInput.value;
        console.log(inputValue);
    });
})