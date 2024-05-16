document.addEventListener('DOMContentLoaded', async function () { 
    //fetch
    const data = await fetch('/api/test')
    const cards = await data.json()
    console.log('cards', cards)
})