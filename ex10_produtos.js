class Produtos {
    constructor(nome,imagem,valor,maxparc){
        this.nome=nome
        this.imagem=imagem
        this.valor=valor
        this.maxparc =maxparc   
    }

}
const produto1= new Produtos("Camiseta Polo"    ,"camisa.jpg"   ,250,5)
const produto2= new Produtos("Calça Jeans"      ,"calca.jpg"    ,500,6)
const produto3= new Produtos("Moleton"          ,"moletom.jpg"  ,400,7)
const produto4= new Produtos("Casaco"           ,"casaco.jpg"   ,250,8)
const produto5= new Produtos("Meia"             ,"meia.jpg"     ,25 ,12)
lista=[produto1,produto2,produto3,produto4,produto5]
function insere_linha(){
    let produto=""
    let html=""
    for (produto in lista){
        
        html+= `
                <div style="display:flex" class="borda ">
                    <div class="textos ">
                        <div >
                            <label> Produto : ${lista[produto].nome}</label>
                        </div>
                        <div >
                            <label> Valor : ${lista[produto].valor}</label>
                        </div>
                        <div >
                            <label> Parcelamento </label>
                        </div>
                        <div >
                            <select>`  
        for (i=1;i<=lista[produto].maxparc;i++) html+=`<option value='${i}'>${i}  Vezes </option>`
        html+=              `</select>
                        </div>
                    </div>
                    <div class="imagem">
                        <div >
                            <img src="${lista[produto].imagem}"></img>
                        </div>
                    </div>
                </div>

                `
        document.getElementById('mutante').innerHTML=html
    }

}






/*Estamos trabalhando em um e-commerce e precisamos que o usuário possa parcelar o produto que ele está comprando. 
Crie uma classe Produto que possui nome, imagem do produto, valor e máximo de parcelas. 
Crie produtos utilizando essa classe e crie uma tela que mostre os produtos e as opções de parcelamento em um select. */