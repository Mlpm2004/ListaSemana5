class Conta{
    constructor(numconta,saldo,cliente,endereco){
        this.numconta=numconta
        this.saldo=saldo
        this.cliente=cliente
        this.endereco=endereco
    }


}
class Endereco{
    constructor(logradouro,numero,cidade){
        this.logradouro=logradouro
        this.numero=numero
        this.cidade=cidade
    }

}
const endereco1 = new Endereco('Rua A',200,'Canoas')
const endereco2 = new Endereco('Rua B',300,'Curitiba')
let endereco=[endereco1,endereco2]
let conta=new Conta(12345,0,'Eu',endereco)
console.log(conta)