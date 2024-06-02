import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conectaApi.criaProdutos(imagem, nome, valor);

    //window.location.href = "../pages/envio-concluido.html"
    alert("Produto enviado com sucesso!");
}

formulario.addEventListener("submit", evento => criarProduto(evento));