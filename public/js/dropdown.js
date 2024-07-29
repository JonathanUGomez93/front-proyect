document.addEventListener('DOMContentLoaded', async function () { 
    //menu de singles
    const dropdownSingles = document.querySelector('.singles')
    //menu de sellado
    const dropdownSealed = document.querySelector('.sealed')
    //div de las opciones de menu de sellado
    const sealedOptions = document.querySelector('.sealedOptions')
    //div de opciones con clase visibility. Default es hidden
    const dropdownVisibility = document.querySelector('.dropdownVisibility')

    dropdownSingles.addEventListener('click', () => {
        dropdownVisibility.classList.toggle('dropdownVisibility');
        sealedOptions.classList.add('dropdownVisibility');
    })
    dropdownSealed.addEventListener('click', () => {
        sealedOptions.classList.toggle('dropdownVisibility');
        dropdownVisibility.classList.add('dropdownVisibility');
    })
})