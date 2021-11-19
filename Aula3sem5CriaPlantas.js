class CriaPlantas {
  constructor(nome,hidratacao,vivo) {
      this.nome=nome
      this.hidratacao=hidratacao
      this.vivo=vivo
  }
  regar(valor){
    if (this.hidratacao<=0 || this.hidratacao>=100) {
      return this.nome+' Morta'
    }else{
      this.hidratacao+valor 
      return this.nome+' Viva'
    }
  }
  
}
let plantas= new CriaPlantas('rosa',0,'viva')
console.log(plantas.regar(110))