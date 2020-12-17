var ellista = document.getElementById('lista');
var elcampo = document.getElementById('campo');
var elbotao = document.getElementById('botao');

var convidados = JSON.parse(localStorage.getItem('convidados')) || []

function listar() {
    ellista.innerHTML=''
    for (const convidado of convidados){
        var elConvidado = document.createElement('li');
        var elNome = document.createTextNode(convidado.nome);
        var elId = document.createTextNode(convidado.id);
        var elIdade = document.createTextNode(convidado.idade);

        var elExcluir = document.createElement('a');
        elExcluir.setAttribute('href', '#')
        var elExcluirTexto = document.createTextNode('Excluir')
        elExcluir.onclick = function (){
            convidados = convidados.filter(function(item){
                    return item.nome !== convidado.nome
            })
            
            salvarConvidados()
            listar()    
        }


        elExcluir.appendChild(elExcluirTexto)
        elConvidado.appendChild(elId);
        elConvidado.appendChild(elNome);
        elConvidado.appendChild(elIdade)
        elConvidado.appendChild(elExcluir)
        ellista.appendChild(elConvidado);
    }
}

listar()

var adicionar = function() {
    var nome = elcampo.value;
    var id = (convidados.length + 1 )
    var idade = Number(prompt('Digite a Idade: '))
    convidados.push({nome: nome, id: id, idade: idade})
    

    elcampo.value = ''
    salvarConvidados()
    listar()
    
}

function salvarConvidados() {
    localStorage.setItem('convidados', JSON.stringify(convidados))
}





//elBotao.onclick = adicionar; -> TAMBÉM SERVE PARA ADICIONAR A FUNÇÃO NO BOTÃO