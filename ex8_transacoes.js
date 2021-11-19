class Transacoes {
    constructor(){
        this.conta=document.getElementById('numconta').value
        this.valorDaTransacao=document.getElementById('valor').value
    }
    Transferencia(){
        if(!this.verificaSeContaExiste(this.buscaDadosLocalstorage(),'nsoma')) alert('Conta não existe')
    }
    Deposito(){
        let dados=new Object
        if (this.conta=="" || this.valorDaTransacao==""){
            alert("Todos os dados devem ser preenchidos")
        }else{
            if (this.valorDaTransacao<=500){
                alert("Valor mínimo de depósito R$500,00")
            }else{
                this.addconta()
            }
        }
    }
    buscaDadosLocalstorage(){ // Carrega dados armazenados no localstorage
        return JSON.parse(localStorage.getItem("movimento"))
    }
    carregaDadosLocalstorage(obj){ // Insere dados alterados no localstorage 
        localStorage.setItem('movimento', JSON.stringify(obj));
    }
    addconta(){
        let historico=new Object //objeto com os dados já existentes
        let dados=new Object
        historico= this.buscaDadosLocalstorage() //busca dados no localstorage
        let juntar= new Object //objto que vai concatenar as linhas existentes com a nova
        let count=1 //contador para gerar indice dos objeos a serem recarregados no localstorage
        let linha=""
        if (historico!=null){ //testa se objeto existia no localstorage
            if (!this.verificaSeContaExiste(historico,'soma')){
                if (Object.keys(historico).length>=2){ //se houver 2 ou mais linhas ja inseridas faz a varredura
                    for (linha in historico){
                        if (historico[linha].id >count) count=historico[linha].id
                        juntar[linha]=historico[linha] //guarda dados ja existentes neste objeto para juntar com o novo
                    }
                    count++
                }else{
                    juntar=historico // Se houver somente uma linha, adiciona a este objeto para juntar com o novo
                    count=2 
                }
                // monta nova linha no objeto dados
                dados.id=count
                dados.conta=this.conta
                dados.valor=this.valorDaTransacao
                juntar["movimento"+count]=dados // concatena dados existentes, se existirem,  com o novo
                this.carregaDadosLocalstorage(juntar) //carrega no localstorage
                alert( "Conta : "+this.conta+" Saldo : "+this.valorDaTransacao)
            }
            document.location.reload(true);
        }
    }
    verificaSeContaExiste(historico,op){
        let linha=""
        let resultado=false
        let juntar= new Object
        for (linha in historico){
            if (historico[linha].conta ==this.conta) {
                if (op=="soma"){
                    historico[linha].valor=(parseInt(this.valorDaTransacao) + parseInt(historico[linha].valor)).toString()
                }else{
                    historico[linha].valor=(parseInt(historico[linha].valor) - parseInt(this.valorDaTransacao) ).toString()
                }
                juntar[linha]=historico[linha]
                resultado=true
                alert( "Conta : "+historico[linha].conta+" Saldo : "+historico[linha].valor)
                break
            }else{
                juntar[linha]=historico[linha]
            }
        }
        if (resultado) this.carregaDadosLocalstorage(juntar)
        return resultado
    }

}
    function insere_linha(ind){
        if (ind=='deposito'){
            html= ` <div class="label" id="deposito">
                        <label> Conta </label>
                    </div>
                    <div class="input">
                        <input type="text" id="numconta" maxlength="50" >
                    </div>
                    <div class="label">
                        <label> Valor </label>
                    </div>
                    <div class="input">
                        <input type="number" min="0" id="valor" maxlength="15" >
                    </div>
                    `
        }
        if (ind=='transferencia'){
            html= ` <div class="label" id="transferencia">
                        <label> Conta </label>
                    </div>
                    <div class="input">
                        <input type="text" id="numconta" maxlength="50" >
                    </div>
                    <div class="label">
                        <label> Valor </label>
                    </div>
                    <div class="input">
                        <input type="number" min="0" id="valor" maxlength="15" >
                    </div>
                    `
        }
        document.getElementById('mutante').innerHTML=html
    }
function movimento(){
    let transacoes=new Transacoes()
    let dif=""
    if(!!document.getElementById("deposito")) transacoes.Deposito()
    if(!!document.getElementById("transferencia")) transacoes.Transferencia()
    
}