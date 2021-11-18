
class Cliente {
    constructor(){
        this.nome="TESTE"
        this.cpf=document.getElementById('entracpf').value
        this.celular="TESTE"
//        this.endereco=  new endereco()
    }
    validaCPF(){
        let numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (this.cpf.length < 11) return false;
        for (i = 0; i < this.cpf.length - 1; i++){
            if (this.cpf.charAt(i) != this.cpf.charAt(i + 1)){
                digitos_iguais = 0;
                break;
            }
        }
        if (!digitos_iguais){
            numeros = this.cpf.substring(0,9);
            digitos = this.cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0)) return false;
            numeros = this.cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)) return false;
            return true;
        }else{
            return false;
        }
    }
    
}
    function valida(){
        let inicio = new Cliente()
        if (inicio.validaCPF()){
            alert("CPF VALIDO")
        }else{
            alert("CPF INVALIDO")
        }

}