import { conectaApi } from "./conectaApi.js";

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("[data-lista]");

    lista.addEventListener("click", async (evento) => {
        if (evento.target.closest(".botao_apagar")) {
            const botaoApagar = evento.target.closest(".botao_apagar");
            const id = botaoApagar.dataset.id;

            const confirmacao = confirm("Tem certeza que deseja excluir este item?");
            if (confirmacao) {
                try {
                    await conectaApi.apagaProduto(id);
                    botaoApagar.closest(".produto_item").remove(); // Remove o item da lista na interface
                    alert(`Item ${id} deletado com sucesso`);
                } catch (error) {
                    alert(`Erro ao deletar o item: ${error.message}`);
                }
            } else {
                alert('Exclusão cancelada.');
            }
        }
    });
});
