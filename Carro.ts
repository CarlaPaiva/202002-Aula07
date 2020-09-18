import {Veiculo} from "./Veiculo";

export class Carro extends Veiculo{
    private Porta:number;

    constructor(marca:string, modelo:string, placa:string, velocidade:number, velocidadeMaxima:number, portas:number){
        super(marca, modelo, placa, velocidade, velocidadeMaxima);
        this.Porta = portas;
    }

    ImrpimirDados(){
        console.log(`|+|+|DADOS DO CARRO|+|+|\n
                    Marca: ${this.Marca} \n
                    Modelo: ${this.Modelo} \n
                    Quantidade de portas: ${this.Porta} \n
                    Placa: ${this.GetPlaca()} \n
                    Velocidade: ${this.GetVelocidade()}\n
                    Velocidade Máxima: ${this.VelocidadeMaxima}`)
    }
}