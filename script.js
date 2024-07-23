var lista_de_filmes = [
    {
        nome: "Capitão América: O Primeiro Vingador (2011)",
        img: "https://image.tmdb.org/t/p/original/19wxfSXHhuJBRbbfUweCsfXFhpv.jpg",
        trailer: "https://www.youtube.com/watch?v=-006iHDHK34",
    },

    {
        nome: "Capitão América 2: O Soldado Invernal (2014)",
        img: "https://image.tmdb.org/t/p/original/9sTDXtIIfHza1rAbmHU2djyzEXA.jpg",
        trailer: "https://www.youtube.com/watch?v=iNk4ht7VZPM",
    },

    {
        nome: "Capitão América: Guerra Civil (2016)",
        img: "https://image.tmdb.org/t/p/original/3bN7YZnf0mWpYwcektizfNlrCwC.jpg",
        trailer: "https://www.youtube.com/watch?v=eLAFMkLnf3M",
    },

    {
        nome: "Em Breve Capitão América: Admirável Mundo Novo (2025)",
        img: "https://i.pinimg.com/originals/71/5a/bd/715abdff62b32bd2b4c2517767e5449e.jpg",
        trailer: "https://www.youtube.com/watch?v=uKigccpBQF4",
    },
]

window.onload = function() {

    for (let lista = 0; lista < lista_de_filmes.length; lista++) {
        var filme = `
    <a href="${lista_de_filmes[lista].trailer}">
            <div id="movie">
                <img src="${lista_de_filmes[lista].img}">
                <p>${lista_de_filmes[lista].nome}</p>
            </div>
        </a>
        
    `
    document.getElementById("movies").innerHTML += filme;
    
    }
}

