import { conectaApi } from "./conectaApi.js";
import constroicard from "./mostarvideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    console.log( dadosPesquisa)
    const busca = await conectaApi.buscaVideo(dadosPesquisa);
   
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    console.log(busca)
    busca.forEach(elemento => lista.appendChild(constroicard(elemento.titulo, elemento.dedscricao, elemento.url, elemento.imagem)));
    
    if(lista.length == 0){
        lista.innerHTML = `<h2 class='mensagem__titulo'>Infelizmente não encontramos nenhum vídeo</h2>`
    }
    
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));