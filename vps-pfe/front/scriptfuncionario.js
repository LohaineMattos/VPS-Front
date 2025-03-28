function navigateTo(page) {
    window.location.href = page;
}

const funcionarios = [
    { 
        nome: "Funcionário A", 
        cpf: "123.456.789-00", 
        email: "funcionarioa@email.com", 
        telefone: "1234-5678", 
        logradouro: "Rua A, 123" 
    },
    { 
        nome: "Funcionário B", 
        cpf: "987.654.321-00", 
        email: "funcionariob@email.com", 
        telefone: "8765-4321", 
        logradouro: "Rua B, 456" 
    }
];

function loadFuncionarios() {
    const funcionariosList = document.getElementById('funcionarios-list');
    funcionariosList.innerHTML = ''; // Limpa a lista antes de carregar

    // Cria a tabela
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Logradouro</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector('tbody');

    // Adiciona os funcionários como linhas na tabela
    funcionarios.forEach(funcionario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionario.nome}</td>
            <td>${funcionario.cpf}</td>
            <td>${funcionario.email}</td>
            <td>${funcionario.telefone}</td>
            <td>${funcionario.logradouro}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    funcionariosList.appendChild(table);
}

// Modal logic
const modalFuncionario = document.getElementById('modal-cadastro-funcionario');
const novoFuncionarioBtn = document.getElementById('novo-funcionario-btn');
const fecharModalFuncionarioBtn = document.getElementById('fechar-modal-funcionario');

novoFuncionarioBtn.addEventListener('click', () => {
    modalFuncionario.classList.remove('hidden');
});

fecharModalFuncionarioBtn.addEventListener('click', () => {
    modalFuncionario.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', loadFuncionarios);