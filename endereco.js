function cadEndereco(){
    let o_endereco=new endereco()
    let dif=""
    if(!!document.getElementById("nome")) dif="nome"
    if(!!document.getElementById("loja")) dif="loja"
    if(!!document.getElementById("mercado")) dif="mercado"
    o_endereco.addLocalStorage(dif)
}
class endereco {
    constructor(){
        this.Logradouro=document.querySelector("#logradouro").value
        this.Numero=document.querySelector("#numero").value
        this.Cidade=document.querySelector("#cidade").value
        this.Estado=document.querySelector("#estado").value
        this.Pais=document.querySelector("#pais").value
        this.cep=document.querySelector("#cep").value
    }
    addLocalStorage(dif){
        let dados=new Object
        dados[dif]=document.querySelector("#"+dif).value
        dados.Logradouro=this.Logradouro
        dados.Numero=this.Numero
        dados.Cidade=this.Cidade
        dados.Estado=this.Estado
        dados.Pais=this.Pais
        dados.cep=this.cep
        this.addcad(dados);
    }
    addcad(dados){//Adiciona item na lista
        let historico=new Object //objeto com os dados já existentes
        historico= this.buscaDadosLocalstorage() //busca dados no localstorage
        let juntar= new Object //objto que vai concatenar as linhas existentes com a nova
        let count=1 //contador para gerar indice dos objeos a serem recarregados no localstorage
        let linha=""
        if (historico!=null){ //testa se objeto existia no localstorage
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
        }
        // monta nova linha no objeto dados
        dados.id=count
        juntar["cadastro"+count]=dados // concatena dados existentes, se existirem,  com o novo
        this.carregaDadosLocalstorage(juntar) //carrega no localstorage
        document.location.reload(true);

    }
    buscaDadosLocalstorage(){ // Carrega dados armazenados no localstorage
        return JSON.parse(localStorage.getItem("cadastro"))
    }
    carregaDadosLocalstorage(obj){ // Insere dados alterados no localstorage 
        localStorage.setItem('cadastro', JSON.stringify(obj));
    }

}