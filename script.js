function carregar(){
    fetch('games.json')
    .then(response => response.json())
    .then(games => {
        const container = document.querySelector("#games-container")
        games.map(game =>{

            const card = document.createElement("div")
            card.classList.add("card")

            const img = document.createElement('img');
            img.src = game.image
            img.alt = game.name

            const titulo = document.createElement('h3')
            titulo.textContent = game.name
            
            card.appendChild(img)
            card.appendChild(titulo)
            container.appendChild(card)



        })
    })
}
carregar()