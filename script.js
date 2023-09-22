// Função para validar o formulário de contato
function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verifica se o campo "nome" está vazio
    if (nome.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    // Verifica se o campo "email" está vazio
    if (email.trim() === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }

    // Verifica se o email é válido usando uma expressão regular simples
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    // Verifica se o campo "mensagem" está vazio
    if (mensagem.trim() === "") {
        alert("Por favor, preencha o campo Mensagem.");
        return false;
    }

    // Se todas as validações passarem, o formulário será enviado
    return true;
}

// Adiciona um ouvinte de evento para o formulário de contato
document.getElementById("formulario").addEventListener("submit", function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});
