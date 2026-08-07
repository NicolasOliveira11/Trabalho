/* =========================================================
   CHARACTERVERSE

   SCRIPT DA BIBLIOTECA DE PERSONAGENS

   Responsável por carregar os personagens
   através do arquivo JSON.
========================================================= */


// =========================================================
// CARREGAR PERSONAGENS DO JSON
// =========================================================

fetch("assets/data/personagens.json")

.then(resposta => resposta.json())

.then(personagens => {

    criarCards(personagens);

})

.catch(erro => {

    console.error(
        "Erro ao carregar personagens:",
        erro
    );

});




// =========================================================
// CRIAÇÃO DOS CARDS
// =========================================================

function criarCards(personagens){


    const lista = document.querySelector("#listaPersonagens");


    lista.innerHTML = "";



    personagens.forEach(personagem => {


        lista.innerHTML += `

        <div class="col-lg-4 col-md-6">


            <a 
            href="personagem.html?id=${personagem.id}"
            class="card-link">


                <div class="personagem-card">


                    <img
                    src="${personagem.imagem}"
                    alt="${personagem.nome}"
                    >



                    <div class="card-info">


                        <span>
                            ${personagem.anime}
                        </span>



                        <h3>
                            ${personagem.nome}
                        </h3>



                        <p>
                            Personagem escolhido por:
                            <strong>
                                ${personagem.dono}
                            </strong>
                        </p>



                        <button type="button">

                            Ver Wiki

                            <i class="bi bi-arrow-right"></i>

                        </button>


                    </div>


                </div>


            </a>


        </div>

        `;


    });


}