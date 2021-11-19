class Livros{
    constructor(titlle,author,year){
        this.titlle=titlle 
        this.author=author 
        this.year=year
    }
    lendBook(){
        return "Emprestou livro "+this.titlle
    }
    static viewList(livro){
         livro.sort((a, b) => a.year - b.year)
        console.log(livro)
    }
}
const livro1 = new Livros("Livro 1","Autor 1", 2021)
const livro2 = new Livros("Livro 2","Autor 2", 2018)
const livro3 = new Livros("Livro 3","Autor 3", 2020)
const livro4 = new Livros("Livro 4","Autor 4", 2015)
let livros=[livro1,livro2,livro3,livro4]
Livros.viewList(livros)
console.log(livro2.lendBook())

