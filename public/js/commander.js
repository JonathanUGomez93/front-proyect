document.addEventListener('DOMContentLoaded', async function () { 
    const data = await fetch('/api/sealed')
    const sealed = await data.json()

    //div contenedor de los precons
    const commanderPrecons = document.querySelector('.commanderPrecons')

    sealed.forEach(item => {
        //contenedor de cada precon individual
        const preconContainer = document.createElement('div')
        preconContainer.classList.add('preconContainer')
        commanderPrecons.appendChild(preconContainer)

        //imagen del precon
        const preconImage = document.createElement('img')
        preconImage.src = item.img
        preconImage.alt = item.title
        preconContainer.appendChild(preconImage)

        //titulo del precon
        const preconTitle = document.createElement('p')
        preconTitle.textContent = item.title
        preconContainer.appendChild(preconTitle)
    });
})