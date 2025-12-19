// Quando a página carregar, busca os dados salvos
window.addEventListener('load', function() {
    const dadosSalvos = localStorage.getItem('produtoSelecionado');
    
    if (dadosSalvos) {
        const produto = JSON.parse(dadosSalvos);

        // Preenche os dados nos elementos HTML
        // Certifique-se de que esses IDs existam no seu HTML da etiqueta
        document.getElementById('info-nome').innerText = produto.nome;
        document.getElementById('info-categoria').innerText = produto.categoria;
        document.getElementById('info-validade').innerText = produto.validade;
        document.getElementById('info-provedor').innerText = produto.provedor;
        document.getElementById('info-corredor').innerText = produto.corredor;
        document.getElementById('info-secao').innerText = produto.secao;
    } else {
        alert("Nenhum produto encontrado!");
    }
});

// FAZ A ETIQUETA ZERAR AO SAIR OU RECARREGAR
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('produtoSelecionado');
});