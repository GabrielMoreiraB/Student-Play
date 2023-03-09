import { conectaApi } from "./conectaApi.js";
import constroicard from "./mostarvideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosPesquisa);
   
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.array.forEach(e => lista.appendChild(constroicard(e.titulo, e.dedscricao, e.url, e.imagem)));
        
    
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));