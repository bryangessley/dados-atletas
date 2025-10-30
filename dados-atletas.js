                //Categoria
    // Infantil: 9 a 11 anos
    // Juvenil: 12 e 13 anos
    // Intermediário: 14 e 15 anos
    // Adulto: 16 a 30 anos
    // Sem categoria: demais idades
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }
    calcularCategoria() {
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        }
        return "Sem Categoria";
    }
    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura)
        return imc
    }
    calculaMediaValida() {
        let notasComputadas = this.notas;
        notasComputadas.sort((a, b) => a - b);
        let notasValidas = notasComputadas.slice(1, -1);
        
        let somaNotas = 0;
        //let somaNotas = notasValidas.reduce((acumulador, nota) => acumulador + nota, 0);
        notasValidas.forEach(nota => {
            somaNotas += nota;
        });
        let media = somaNotas / notasValidas.length;
        return media; 
    }
    obtemNomeAtleta() {
        return this.nome
    }
    obtemIdadeAtleta() {
        return this.idade
    }
    obtemPesoAtleta() {
        return this.peso
    }
    obtemAlturaAtleta(){
        return this.altura
    }
    obtemNotasAtleta() {
        return this.notas
    }
    obtemCategoria() {
       return this.calcularCategoria();
    }
    obtemIMC() {
        return this.calculaIMC();
    }
    obtemMediaValida() {
        return this.calculaMediaValida();
    }
    getResumo() {
        console.log(`Nome: ${this.obtemNomeAtleta()}`);
        console.log(`Idade: ${this.obtemIdadeAtleta()}`);
        console.log(`Peso: ${this.obtemPesoAtleta()}`);
        console.log(`Altura: ${this.obtemAlturaAtleta()}`);
        console.log(`Notas: ${this.obtemNotasAtleta().join(',')}`);
        console.log(`Categoria: ${this.obtemCategoria()}`);
        console.log(`IMC: ${this.obtemIMC()}`);
        console.log(`Media: ${this.obtemMediaValida()}`);
    }
}

const listaDeAtletas = [
    new Atleta("Cesar Abascal",
        30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]),
    
    new Atleta("Fernando Puntel",
        15, 75, 1.86,
        [8, 10, 10, 7, 9.33]),
    
    new Atleta("Daiane Jelinsky",
        10, 54, 1.60,
        [7, 10, 9.5, 9.5, 8]),

    new Atleta("Bruno Castro", 
        31, 100, 1.90,
        [10, 10, 10, 9, 9.5]),
]

listaDeAtletas.forEach(atleta => {
    atleta.getResumo();
    console.log("------------------")
})