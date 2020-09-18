import {Veiculo} from "./Veiculo";

export class Aviao extends Veiculo{
    private NumeroPassageiros:number;

    constructor(marca:string, modelo:string, placa:string, velocidade:number, velocidadeMaxima:number, numeroPassageiros:number){
        super(marca, modelo, placa, velocidade, velocidadeMaxima);
        this.NumeroPassageiros = numeroPassageiros;
    }

    ImrpimirDados(){
        console.log(`|+|+|DADOS DO AVIÃO|+|+|\n
                    Marca: ${this.Marca} \n
                    Modelo: ${this.Modelo} \n
                    Quantidade passageiros suportadda: ${this.NumeroPassageiros} \n
                    Placa: ${this.GetPlaca()} \n
                    Velocidade: ${this.GetVelocidade()}\n
                    Velocidade Máxima: ${this.VelocidadeMaxima}`)
    }
}