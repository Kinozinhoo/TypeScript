    import { carro } from './Carro'
    var rl= require("readline-sync")
    export class Garagem{
        garagem: carro[]


        constructor() {
            this.garagem=[]
        }

        public addCarro(carro: carro): void{
            if(this.garagem.length>= 10){
                console.log('garagem cehia')
            }else{
                this.garagem.push(carro)
            }
        }
        public removerCarro(): void{
            console.log(this.garagem)
            let remover= 
        }
    }