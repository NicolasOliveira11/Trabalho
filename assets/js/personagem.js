/* =========================================================
   CHARACTERVERSE
   CARREGAMENTO DINÂMICO DA WIKI

   Dados carregados através de JSON
========================================================= */



const parametros = new URLSearchParams(
    window.location.search
);


const idPersonagem = parametros.get("id");





// Busca os dados da API local JSON

fetch("assets/data/personagens.json")


.then(resposta => resposta.json())


.then(personagens => {



    const personagem = personagens.find(

        item => item.id === idPersonagem

    ) || personagens[0];




    carregarPersonagem(personagem);



})



.catch(erro => {


    console.error(

        "Erro ao carregar personagens:",
        erro

    );


});








function carregarPersonagem(personagem){



    document.title =

    `${personagem.nome} | CharacterVerse`;





    document.querySelector("#nomePersonagem").textContent =
    personagem.nome;




    document.querySelector("#anime").textContent =
    personagem.anime;




    document.querySelector("#frasePersonagem").textContent =
    personagem.frase;





    document.querySelector("#imagemPersonagem").src =
    personagem.imagem;




    document.querySelector("#nomeInfo").textContent =
    personagem.nome;




    document.querySelector("#animeInfo").textContent =
    personagem.anime;




    document.querySelector("#raca").textContent =
    personagem.raca;




    document.querySelector("#classe").textContent =
    personagem.classe;




    document.querySelector("#status").textContent =
    personagem.status;





    document.querySelector("#historia").textContent =
    personagem.historia;




    document.querySelector("#personalidade").textContent =
    personagem.personalidade;







    const listaPoderes =
    document.querySelector("#poderes");



    listaPoderes.innerHTML = "";



    personagem.poderes.forEach(poder => {


        listaPoderes.innerHTML +=

        `
        <li>${poder}</li>
        `;


    });







    const listaCuriosidades =
    document.querySelector("#curiosidades");



    listaCuriosidades.innerHTML = "";



    personagem.curiosidades.forEach(item => {


        listaCuriosidades.innerHTML +=

        `
        <li>${item}</li>
        `;


    });







    document.querySelector("#bannerPersonagem")
    .style.backgroundImage =


    `
    linear-gradient(
        rgba(7,11,24,.75),
        rgba(7,11,24,.9)
    ),
    url(${personagem.background})
    `;



    console.log(

        "Wiki carregada:",
        personagem.nome

    );


}