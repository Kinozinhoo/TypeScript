var rl = require('readline-sync')

export class carro {
    gasolina: number
    marca: string
    kmL: number
    constructor(gasolina: number, marca: string, kmL: number) {
        this.gasolina = gasolina
        this.marca = marca
        this.kmL = kmL
    }

    andar(kmL: number): void {
        let anda = this.gasolina - (kmL / this.kmL)
        if (anda <= 0) {
            console.log("O carro não pode andar")
        }
        else {
            this.gasolina = anda
            console.log(`Sobrou ${this.gasolina} litros de gasosa`)
        }
    }


    obtergasolina(): Number {
        return this.gasolina
    }
    adicionarGasolina(): void {
        let abastece = rl.questionInt('quantos litros c vai abastecer');
        console.log(`oc abasteceu ${abastece} litros de gasolina `);
        this.gasolina = this.gasolina = abastece
    }

    getCarro(): void {
        console.log(`seu carro tem ${this.gasolina} é da marca ${this.marca} e vai percorrer ${this.kmL} `);
    }

    setCarro(): void {

        let setMarca = rl.questionInt('Qual marca voce quer?:')
        let setGasolina = rl.questionInt('Quanto de gasolina voce quer?:')
        let setKM = rl.questionInt('Quantos litros de gasolina voce deseja gastar?:')
        this.marca = setMarca
        this.gasolina = setGasolina
        this.kmL = setKM
    }

}
let teste = new carro(50, 'ferrari', 60)
teste.andar(5)





