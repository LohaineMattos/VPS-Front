function navigateTo(page) {
    window.location.href = page;
}

const produtos = [
    { nome: "Produto A", descricao: "Descrição A", preco_compra: 50.0, preco_venda: 70.0 },
    { nome: "Produto B", descricao: "Descrição B", preco_compra: 30.0, preco_venda: 45.0 }
];

function loadProdutos() {
    const produtosList = document.getElementById('produtos-list');
    produtosList.innerHTML = ''; // Limpa a lista antes de carregar

    // Cria a tabela
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Valor de Custo</th>
                <th>Valor Final</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector('tbody');

    // Adiciona os produtos como linhas na tabela
    produtos.forEach(produto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>R$ ${produto.preco_compra.toFixed(2)}</td>
            <td>R$ ${produto.preco_venda.toFixed(2)}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    produtosList.appendChild(table);
}

// Modal logic
const modal = document.getElementById('modal-cadastro');
const novoProdutoBtn = document.getElementById('novo-produto-btn');
const fecharModalBtn = document.getElementById('fechar-modal');

novoProdutoBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

fecharModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', loadProdutos);