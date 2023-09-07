const form = document.getElementById('form-contatos');


form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

let linhas = '';

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero');

    let linha = '<tr>' ;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';
    linhas += linha;

    inputNomeContato.value= '';
    inputNumero.value= '';
};
function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};