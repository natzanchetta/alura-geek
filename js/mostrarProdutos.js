import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, nome, valor) {
    const produto = document.createElement("li");
    produto.className = "produto_item";
    produto.innerHTML = `
    <img src="${imagem}" alt="imagem produto" class="produto_imagem">
    <h3>${nome}</h3>
    <div class="produto_barra">
        <p>${valor}</p>
        <img src="./img/icon_trash.png" alt="ícone lixeira" class="produto_barra_icone">
    </div>`
    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.imagem, elemento.nome, elemento.valor)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`;
    }
}

listaProdutos();
