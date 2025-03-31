// Controle de Tamanho de Fonte
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const minSize = 14;
    const maxSize = 20;
    const defaultSize = 16;
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
       })
       
    function setFontSize(size) {
        html.style.fontSize = `${size}px`;
        localStorage.setItem('fontSize', size);
    }

    document.getElementById('aumentar-fonte').addEventListener('click', () => {
        const currentSize = parseInt(getComputedStyle(html).fontSize);
        if (currentSize < maxSize) setFontSize(currentSize + 1);
    });

    document.getElementById('diminuir-fonte').addEventListener('click', () => {
        const currentSize = parseInt(getComputedStyle(html).fontSize);
        if (currentSize > minSize) setFontSize(currentSize - 1);
    });

    document.getElementById('resetar-fonte').addEventListener('click', () => {
        setFontSize(defaultSize);
    });

    // Carregar tamanho salvo
    const savedSize = localStorage.getItem('fontSize');
    if (savedSize) setFontSize(parseInt(savedSize));
    const alternaContraste = document.getElementById('alterna-contraste')
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
})

ScrollReveal().reveal('#inicio', { delay: 300 });
ScrollReveal().reveal('#tropicalia', { delay: 300 });
ScrollReveal().reveal('#galeria', { delay: 300 });
ScrollReveal().reveal('#contato', { delay: 800 });
});
