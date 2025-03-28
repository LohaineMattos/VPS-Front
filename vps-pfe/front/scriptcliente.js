function navigateTo(page) {
    window.location.href = page;
}

const clientes = [
    { 
        nome: "Cliente A", 
        cpf: "123.456.789-00", 
        email: "clientea@email.com", 
        logradouro: "Rua A, 123" 
    },
    { 
        nome: "Cliente B", 
        cpf: "987.654.321-00", 
        email: "clienteb@email.com", 
        logradouro: "Rua B, 456" 
    }
];

function loadClientes() {
    const clientesList = document.getElementById('clientes-list');
    clientesList.innerHTML = ''; // Limpa a lista antes de carregar

    // Cria a tabela
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Logradouro</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector('tbody');

    // Adiciona os clientes como linhas na tabela
    clientes.forEach(cliente => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.email}</td>
            <td>${cliente.logradouro}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    clientesList.appendChild(table);
}

// Modal logic
const modalCliente = document.getElementById('modal-cadastro-cliente');
const novoClienteBtn = document.getElementById('novo-cliente-btn');
const fecharModalClienteBtn = document.getElementById('fechar-modal-cliente');

novoClienteBtn.addEventListener('click', () => {
    modalCliente.classList.remove('hidden');
});

fecharModalClienteBtn.addEventListener('click', () => {
    modalCliente.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', loadClientes);