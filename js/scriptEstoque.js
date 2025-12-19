const localizacoes = {
    "frutas": { corredor: "3", secao: "2" },
    "cereais": { corredor: "3", secao: "1" },
    "mel": { corredor: "2", secao: "2" },
    "doces": { corredor: "2", secao: "1" },
    "leite": { corredor: "1", secao: "2" },
    "acai": { corredor: "1", secao: "1" }
};


//elementos que vão se alterar
const selectCategoria = document.getElementById('categoria');
const pCorredor = document.querySelector('.info-box p:first-child');
const pSecao = document.querySelector('.info-box p:last-child');
const form = document.querySelector('.form-estoque'); // Adicione esta linha se não houver

// Atualiza a visualização em tempo real no formulário
selectCategoria.addEventListener('change', function() {
    const categoriaSelecionada = this.value;
    const local = localizacoes[categoriaSelecionada];

    if (local) {
        pCorredor.innerText = `Corredor ${local.corredor}`;
        pSecao.innerText = `Seção ${local.secao}`;
    }
});

// Salva e Redireciona
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const categoria = selectCategoria.value;
    const local = localizacoes[categoria];

    if (!local) {
        alert("Por favor, selecione uma categoria!");
        return;
    }

    const dadosProduto = {
        nome: document.getElementById('nome').value,
        categoria: selectCategoria.options[selectCategoria.selectedIndex].text,
        validade: document.getElementById('validade').value,
        provedor: document.getElementById('provedor').value,
        corredor: local.corredor,
        secao: local.secao
    };

    localStorage.setItem('produtoSelecionado', JSON.stringify(dadosProduto));
    window.location.href = 'etiqueta.html';
});