document.addEventListener('DOMContentLoaded', async function () { 
    const dropdownButton = document.querySelector('.dropdown')
    const dropdownSealed = document.querySelector('.sealed')
    const sealedOptions = document.querySelector('.sealedOptions')
    const dropdownOptionContainer = document.querySelector('.dropdownOptionContainer')

    dropdownButton.addEventListener('click', () => {
        dropdownOptionContainer.classList.toggle('dropdownOptionVisibility');
        dropdownOptionContainer.classList.toggle('dropdownOptionContainer');
    })
    dropdownSealed.addEventListener('click', () => {
        sealedOptions.classList.toggle('dropdownOptionVisibility');
        sealedOptions.classList.toggle('dropdownOptionContainer');
    })
})