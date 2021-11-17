//busca dados no localStorage
function buscaDadosLocalstorage(){ // Carrega dados armazenados no localstorage
    return JSON.parse(localStorage.getItem("cadastro"))
}
//Monta HTML
    let htmlcli=""
    let htmlloja=""
    let htmlmercado=""
    const linhas=buscaDadosLocalstorage()
    for (obj in linhas){ //Busca dados das linhas a serem montadas
        if (!!linhas[obj].nome) { //Monta html
            htmlcli+= `<label style="width:550px"><b> Nome : </b>${linhas[obj].nome}</label>`    
            htmlcli+= `<label style="width:550px"><b> Logradouro :</b> ${linhas[obj].Logradouro}</label>`    
            htmlcli+= `<label style="width:550px"><b> Número :</b> ${linhas[obj].Numero}</label>`    
            htmlcli+= `<label style="width:550px"><b> Cidade :</b> ${linhas[obj].Cidade}</label>`    
            htmlcli+= `<label style="width:550px"><b> Estado :</b> ${linhas[obj].Estado}</label>`    
            htmlcli+= `<label style="width:550px"><b> País :</b> ${linhas[obj].Pais}</label>`    
            htmlcli+= `<label style="width:550px; padding-bottom: 10px;"><b> CEP : </b>${linhas[obj].cep}</label>` 
        }
        if (!!linhas[obj].loja) { //Monta html
            htmlloja+= `<label style="width:550px"> Loja : ${linhas[obj].loja}</label>`    
            htmlloja+= `<label style="width:550px"><b> Logradouro :</b> ${linhas[obj].Logradouro}</label>`    
            htmlloja+= `<label style="width:550px"><b> Número :</b> ${linhas[obj].Numero}</label>`    
            htmlloja+= `<label style="width:550px"><b> Cidade :</b> ${linhas[obj].Cidade}</label>`    
            htmlloja+= `<label style="width:550px"><b> Estado :</b> ${linhas[obj].Estado}</label>`    
            htmlloja+= `<label style="width:550px"><b> País :</b> ${linhas[obj].Pais}</label>`    
            htmlloja+= `<label style="width:550px; padding-bottom: 10px;"><b> CEP : </b>${linhas[obj].cep}</label>` 
        }
        if (!!linhas[obj].mercado) { //Monta html
            htmlmercado+= `<label style="width:550px"> Mercado : ${linhas[obj].mercado}</label>`    
            htmlmercado+= `<label style="width:550px"><b> Logradouro :</b> ${linhas[obj].Logradouro}</label>`    
            htmlmercado+= `<label style="width:550px"><b> Número :</b> ${linhas[obj].Numero}</label>`    
            htmlmercado+= `<label style="width:550px"><b> Cidade :</b> ${linhas[obj].Cidade}</label>`    
            htmlmercado+= `<label style="width:550px"><b> Estado :</b> ${linhas[obj].Estado}</label>`    
            htmlmercado+= `<label style="width:550px"><b> País :</b> ${linhas[obj].Pais}</label>`    
            htmlmercado+= `<label style="width:550px; padding-bottom: 10px;"><b> CEP : </b>${linhas[obj].cep}</label>` 
        }
        
    }
    document.getElementById('clientes').innerHTML=htmlcli //Popula DIV 
    document.getElementById('lojas').innerHTML=htmlloja //Popula DIV 
    document.getElementById('mercados').innerHTML=htmlmercado //Popula DIV 

