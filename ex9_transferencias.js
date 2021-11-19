class Transacoes {
    constructor(){
        this.conta=document.getElementById('numconta').value
        this.valorDaTransacao=document.getElementById('valor').value
        this.idDeTransferencia=""
        this.contaDestino=document.getElementById('numcontad').value
        this.data=new Date()
    }
    Transferencia(){
        let idtransacao=new Object
        let historico=this.buscaDadosLocalstorage('movimento_ex9')
        let indice= this.buscaDadosLocalstorage('indice')
        if (indice==null){
            idtransacao.id=1
        }else{
            idtransacao.id=(parseInt(indice.id )+1).toString() 
        }
        this.carregaDadosLocalstorage(idtransacao,'indice')
        alert (idtransacao.id)
        let juntar= new Object 
        if(this.verificaSeContaExiste(this.conta) && this.verificaSeContaExiste(this.contaDestino)) {
            juntar=this.soma(historico,this.contaDestino,idtransacao.id)
            historico=this.subtrai(juntar,this.conta,idtransacao.id)
            this.carregaDadosLocalstorage(historico,'movimento_ex9') //carrega no localstorage
        }else{
            alert("Conta não existe")
        }
        document.location.reload(true);        
    }
    Deposito(){
        let dados=new Object
        if (this.conta=="" || this.valorDaTransacao==""){
            alert("Todos os dados devem ser preenchidos")
        }else{
            this.addconta()
        }
    }
    buscaDadosLocalstorage(area){ // Carrega dados armazenados no localstorage
        return JSON.parse(localStorage.getItem(area))
    }
    carregaDadosLocalstorage(obj,area){ // Insere dados alterados no localstorage 
        localStorage.setItem(area, JSON.stringify(obj));
    }
    subtrai(historico,conta,id){
        let linha=""
        for (linha in historico){
            if (conta==historico[linha].conta){ 
                historico[linha].valor=(parseInt(historico[linha].valor - parseInt(this.valorDaTransacao)  )).toString()
                historico[linha].data=new Date()
                historico[linha].idDeTransferencia=id
                break
            }
        }
        alert( "Conta : "+conta+" Saldo : "+historico[linha].valor)
        return(historico)
    }
    soma(historico,conta,id){
        let linha=""
        for (linha in historico){
            if (conta==historico[linha].conta){ 
                historico[linha].valor=(parseInt(this.valorDaTransacao) + parseInt(historico[linha].valor)).toString()
                historico[linha].data=new Date()
                historico[linha].idDeTransferencia=id
                break
            }
        }
        alert( "Conta : "+conta+" Saldo : "+historico[linha].valor)
        return(historico)
    }
     addconta(){
        let historico=new Object //objeto com os dados já existentes
        let dados=new Object
        historico= this.buscaDadosLocalstorage('movimento_ex9') //busca dados no localstorage
        let juntar= new Object //objto que vai concatenar as linhas existentes com a nova
        let count=1 //contador para gerar indice dos objeos a serem recarregados no localstorage
        let linha=""
        if (this.verificaSeContaExiste(this.conta)){ //testa se objeto existia no localstorage
            juntar=this.soma(historico,this.conta,0)
        }else{
            if (historico!=null){
                for (linha in historico){
                    if (historico[linha].id >count) count=historico[linha].id
                    juntar[linha]=historico[linha] //guarda dados ja existentes neste objeto para juntar com o novo
                }
                count++
            }
            dados.id=count
            dados.conta=this.conta
            dados.valor=(parseInt(this.valorDaTransacao) + 500).toString()
            dados.data=this.data
            dados.idDeTransferencia=0
            dados.contaDestino=0
            juntar["movimento_ex9"+count]=dados // concatena dados existentes, se existirem,  com o novo
            alert( "Conta : "+this.conta+" Saldo : "+dados.valor)
        }
        this.carregaDadosLocalstorage(juntar,'movimento_ex9') //carrega no localstorage
        document.location.reload(true);        
    }
    verificaSeContaExiste(conta){
        let linha=""
        let historico=this.buscaDadosLocalstorage('movimento_ex9')
        for (linha in historico) if (historico[linha].conta ==this.conta) return true
        return false
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
                    <input type="hidden" id="numcontad" value="" >
                    `
        }
        if (ind=='transferencia'){
            html= ` <div class="label" id="transferencia">
                        <label> Conta </label>
                    </div>
                    <div class="input">
                        <input type="text" id="numconta" maxlength="50" >
                    </div>
                    <div class="label" >
                        <label> Conta Destino</label>
                    </div>
                    <div class="input">
                        <input type="text" id="numcontad" maxlength="50" >
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