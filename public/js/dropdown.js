document.addEventListener('DOMContentLoaded', async function () { 
    //menu de singles
    const dropdownSingles = document.querySelector('.singles')
    //menu de sellado
    const dropdownSealed = document.querySelector('.sealed')
    //menu de cuenta
    const dropdownAccount = document.querySelector('.account')


    //div de las opciones de menu de sellado
    const sealedOptions = document.querySelector('.sealedOptions')
    //div de opciones con clase visibility. Default es hidden
    const dropdownVisibility = document.querySelector('.dropdownVisibility')
    //div opciones de cuenta
    const accountOptions = document.querySelector('.accountOptions')

    dropdownSingles.addEventListener('click', () => {
        dropdownVisibility.classList.toggle('dropdownVisibility');
        sealedOptions.classList.add('dropdownVisibility');
        accountOptions.classList.add('dropdownVisibility');
    })
    dropdownSealed.addEventListener('click', () => {
        sealedOptions.classList.toggle('dropdownVisibility');
        dropdownVisibility.classList.add('dropdownVisibility');
        accountOptions.classList.add('dropdownVisibility');
    })
    dropdownAccount.addEventListener('click', () => {
        accountOptions.classList.toggle('dropdownVisibility');
        dropdownVisibility.classList.add('dropdownVisibility');
        sealedOptions.classList.add('dropdownVisibility');
    })
})