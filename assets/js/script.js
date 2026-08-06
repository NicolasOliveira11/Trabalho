/* =========================================================
   CHARACTERVERSE
   SCRIPT PRINCIPAL

   Responsável pelas interações da página inicial.
========================================================= */



/* =========================================================
   1 - ALTERAÇÃO DA NAVBAR AO ROLAR A PÁGINA

   Quando o usuário desce a página,
   adiciona uma cor de fundo na navbar.
========================================================= */


const navbar = document.querySelector("#navbar");



window.addEventListener("scroll", () => {


    if(window.scrollY > 50){


        navbar.classList.add("scrolled");


    } else {


        navbar.classList.remove("scrolled");


    }


});







/* =========================================================
   2 - BOTÃO VOLTAR AO TOPO

   Mostra o botão quando o usuário desce.
========================================================= */


const btnTopo = document.querySelector("#btnTopo");



window.addEventListener("scroll", () => {


    if(window.scrollY > 400){


        btnTopo.classList.add("show");


    } else {


        btnTopo.classList.remove("show");


    }


});





btnTopo.addEventListener("click", () => {


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});







/* =========================================================
   3 - ANIMAÇÃO DE ENTRADA DOS CARDS

   Faz os cards aparecerem suavemente
   conforme entram na tela.
========================================================= */


const cards = document.querySelectorAll(".personagem-card");



const observer = new IntersectionObserver((elementos)=>{


    elementos.forEach((elemento)=>{


        if(elemento.isIntersecting){


            elemento.target.style.opacity = "1";


            elemento.target.style.transform = "translateY(0)";


        }



    });



},{

    threshold:0.2

});





cards.forEach((card)=>{


    card.style.opacity = "0";


    card.style.transform = "translateY(30px)";


    card.style.transition = "0.6s ease";



    observer.observe(card);



});








/* =========================================================
   4 - ANO AUTOMÁTICO NO FOOTER

   Evita precisar atualizar manualmente.
========================================================= */


const ano = document.querySelector(".copyright");



if(ano){


    const anoAtual = new Date().getFullYear();


    ano.innerHTML =

    `
        © ${anoAtual} Graú - Técnico

        <br>

        INF-08
    `;


}







/* =========================================================
   5 - EFEITO SUAVE NOS LINKS INTERNOS

   Melhora a navegação dentro da página.
========================================================= */


const linksInternos = document.querySelectorAll(
    'a[href^="#"]'
);



linksInternos.forEach((link)=>{


    link.addEventListener("click",(evento)=>{


        evento.preventDefault();



        const destino = document.querySelector(
            link.getAttribute("href")
        );



        if(destino){


            destino.scrollIntoView({


                behavior:"smooth"


            });


        }



    });



});








/* =========================================================
   6 - PREPARAÇÃO PARA SISTEMA DE PERSONAGENS

   Futuramente será usado com personagens.json

   Exemplo:

   Frieren
   Albedo
   Venom
   Nezuko

========================================================= */



const personagens = {


    frieren:{


        nome:"Frieren",


        tema:"fantasy"


    },


    albedo:{


        nome:"Albedo",


        tema:"dark"


    },


    venom:{


        nome:"Venom",


        tema:"symbiote"


    },


    nezuko:{


        nome:"Nezuko",


        tema:"pink"


    },


    sung:{


        nome:"Sung",


        tema:"shadow"


    }


};





console.log(
    "CharacterVerse carregado!",
    personagens
);