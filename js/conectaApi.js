async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProdutos(imagem, nome, valor) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            valor: `$ ${valor}`
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function apagaProduto(id) {
    const url = `http://localhost:3000/produtos/${id}`;

    try {
        const conexao = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        })
        
        if (!conexao.ok) {
            throw new Error(`Erro ao deletar o item: ${conexao.statusText}`);
        }

        alert(`Item ${id} deletado com sucesso`);

        } catch (error) {
            console.error('Erro:', error);
        }
}

export const conectaApi = {
    listaProdutos,
    criaProdutos,
    apagaProduto
}
