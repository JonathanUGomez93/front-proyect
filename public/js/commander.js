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
        //la imagen debe tener cursos pointer
        preconImage.style.cursor = 'pointer'
        preconContainer.appendChild(preconImage)

        //precio del precon
        const preconPrice = document.createElement('h2')
        preconPrice.textContent =`${item.price} usd`
        preconContainer.appendChild(preconPrice)

        //titulo del precon
        const preconTitle = document.createElement('h3')
        preconTitle.textContent = item.title
        preconContainer.appendChild(preconTitle)

        if (item.color === 'simic') {
            preconContainer.classList.add('backgroundSimic')
            preconTitle.classList.add('titleSimic')
        }
        else if (item.color === 'Grixis') {
            preconContainer.classList.add('backgroundGrixis')
            preconTitle.classList.add('titleGrixis')
        } else {
            preconContainer.classList.add('backgroundAzorius')
            preconTitle.classList.add('titleAzorius')
        }
        
        //boton de agregar al carrito
        const preconButton = document.createElement('a')
        preconButton.href = `/sealed/commander/precon/${item.id}`
        preconButton.textContent = 'Ver más'
        preconButton.classList.add('preconButton')
        preconContainer.appendChild(preconButton)
    });
})