class ListaConvidados {
    constructor() {
        this.convidados = []
        this.ellista = document.getElementById('lista')
        
    }

    adicionar(nome){
        this.convidados.push({nome: nome})
        console.log(this.convidados)
        this.listar()
    }

    listar(){
        for (const convidado of this.convidados){
            var elConvidado = document.createElement('li')
            var elNome = document.createTextNode(convidado.nome)
             
        }
        

       
        elConvidado.appendChild(elNome)
        this.ellista.appendChild(elConvidado);

    }
}
            
            
            
var elExcluir = document.createElement('a');
elExcluir.setAttribute('href', '#')
var elExcluirTexto = document.createTextNode('Excluir')








var nConv = new ListaConvidados();


document.getElementById('botao').onclick = function() {
    var elcampo = document.getElementById('campo').value;
    nConv.adicionar(elcampo)
}












//elBotao.onclick = adicionar; -> TAMBÉM SERVE PARA ADICIONAR A FUNÇÃO NO BOTÃO