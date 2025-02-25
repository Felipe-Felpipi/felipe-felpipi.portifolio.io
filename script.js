// Função para abrir o modal com a descrição
function openModal(icon, description) {
    const modal = document.getElementById('modal'); // Seleciona o modal
    const modalIcon = document.getElementById('modal-icon'); // Seleciona o ícone do modal
    const modalDescription = document.getElementById('modal-description'); // Seleciona a descrição do modal

    modalIcon.src = icon; // Define o ícone no modal
    modalDescription.textContent = description; // Define a descrição no modal
    modal.classList.add('active'); // Exibe o modal
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal'); // Seleciona o modal
    modal.classList.remove('active'); // Oculta o modal
}

// Fechar o modal ao clicar no "X"
document.getElementById('close-modal').addEventListener('click', closeModal);

// Fechar o modal ao clicar fora
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) { // Verifica se o clique foi fora do conteúdo do modal
        closeModal(); // Fecha o modal
    }
});

// Adicionar evento de clique aos botões
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color'); // Obtém a cor do botão
        const icon = button.getAttribute('data-icon'); // Obtém o ícone do botão
        const description = button.getAttribute('data-description'); // Obtém a descrição do botão

        document.body.style.backgroundColor = color; // Altera a cor de fundo da página
        openModal(icon, description); // Abre o modal com o ícone e a descrição
    });
});

// Resetar a cor de fundo ao clicar no botão LinkTree
document.getElementById('linktree-button').addEventListener('click', () => {
    document.body.style.backgroundColor = '#1a1a1a'; // Volta para a cor inicial
});

// Animar elementos ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.category'); // Seleciona todos os elementos da categoria
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top; // Obtém a posição do elemento em relação ao topo da janela
        const windowHeight = window.innerHeight; // Obtém a altura da janela

        if (elementTop < windowHeight * 0.8) { // Verifica se o elemento está visível na tela
            element.classList.add('visible'); // Adiciona a classe 'visible' para animar o elemento
        }
    });
}

// Adiciona o evento de scroll para animar os elementos
window.addEventListener('scroll', animateOnScroll);

// Executa a animação ao carregar a página
document.addEventListener('DOMContentLoaded', animateOnScroll);
