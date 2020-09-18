export class Veiculo{
    Marca:string;
    Modelo:string;
    private Placa:string;
    private Velocidade:number;
    protected VelocidadeMaxima:number;
    private static NumeroVeiculosCriados:number = 0;

    constructor(marca:string, modelo:string, placa:string, velocidade:number, velocidadeMaxima:number) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Placa = placa;
        this.Velocidade = velocidade;
        this.VelocidadeMaxima = velocidadeMaxima;
        
        Veiculo.NumeroVeiculosCriados++;
    }

    GetPlaca(){
        return this.Placa;
    }

    GetVelocidade(){
        return this.Velocidade;
    }

    Acelerar(velocidade:number){

        let tempVelocidade = this.Velocidade + velocidade;
        
        if (velocidade > 10)
            console.log('Não é permitido acelerar mais de 10km/h.');
        else if (tempVelocidade > this.VelocidadeMaxima)
            console.log('Não é possível acelerar. Velocidade máxima atingida.');
        else
            this.Velocidade = tempVelocidade;      
    }

    Frear(){
        let tempo:number = 0;

        while (this.Velocidade >= 10){
            this.Velocidade -= 10;
            tempo++;
        }

        return tempo;
    }

    static ImprimirQuantidadeDeVeiculosCriados(){
        console.log(`Quantidade de veículos criados: ${Veiculo.NumeroVeiculosCriados}`)
    }
}