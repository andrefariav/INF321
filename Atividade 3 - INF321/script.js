// Atividade final - JavaScript

const botoesComprar = document.querySelectorAll(".comprar");
const buscaProduto = document.querySelector("#buscaProduto");
const botaoBuscar = document.querySelector("#botaoBuscar");
const mensagemBusca = document.querySelector("#mensagemBusca");
const cards = document.querySelectorAll(".card");
const formulario = document.querySelector("#formulario");
const mensagemFormulario = document.querySelector("#mensagemFormulario");

const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoMensagem = document.querySelector("#mensagem");
const campos = [campoNome, campoEmail, campoMensagem];


// Botão "Comprar"
botoesComprar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        botao.closest(".card").classList.add("no-carrinho");

        mensagemBusca.textContent = "Produto adicionado ao carrinho!";
        mensagemBusca.classList.remove("erro");
        mensagemBusca.classList.add("sucesso");
    });
});


// Campo de busca
function buscarProdutos() {
    const termo = buscaProduto.value.toLowerCase().trim();
    let encontrados = 0;

    cards.forEach(function (card) {
        const nome = card
            .querySelector(".Produtos")
            .textContent
            .toLowerCase();

        if (nome.includes(termo)) {
            card.classList.remove("oculto");
            encontrados++;
        } else {
            card.classList.add("oculto");
        }
    });

    if (encontrados === 0) {
        mensagemBusca.textContent = "Nenhum produto encontrado.";
        mensagemBusca.classList.remove("sucesso");
        mensagemBusca.classList.add("erro");
    } else if (termo !== "") {
        mensagemBusca.textContent = encontrados + " produto(s) encontrado(s).";
        mensagemBusca.classList.remove("erro");
        mensagemBusca.classList.add("sucesso");
    } else {
        mensagemBusca.textContent = "";
        mensagemBusca.classList.remove("sucesso", "erro");
    }
}

botaoBuscar.addEventListener("click", buscarProdutos);

buscaProduto.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        buscarProdutos();
    }
});


// Formulário com validação obrigatória
function mostrarMensagemFormulario(texto, tipo) {
    mensagemFormulario.textContent = texto;
    mensagemFormulario.classList.remove("sucesso", "erro");
    mensagemFormulario.classList.add(tipo);
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let todosPreenchidos = true;

    campos.forEach(function (campo) {
        const vazio = campo.value.trim() === "";
        campo.classList.toggle("campo-erro", vazio);
        if (vazio) {
            todosPreenchidos = false;
        }
    });

    if (!todosPreenchidos) {
        mostrarMensagemFormulario("Preencha todos os campos obrigatórios.", "erro");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoEmail.value.trim());

    if (!emailValido) {
        campoEmail.classList.add("campo-erro");
        mostrarMensagemFormulario("Digite um e-mail válido.", "erro");
        return;
    }

    mostrarMensagemFormulario("Mensagem enviada com sucesso!", "sucesso");
    formulario.reset();
});

// Remove o destaque de erro assim que o usuário volta a digitar
campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
        campo.classList.remove("campo-erro");
    });
});
