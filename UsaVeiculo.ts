import {Carro} from "./Carro";
import {Aviao} from "./Aviao";
import { Veiculo } from "./Veiculo";

let carro1:Carro = new Carro("marca 1", "modelo 1", "abc-12346", 45, 125, 4);
carro1.ImrpimirDados();

let carro2:Carro = new Carro("marca 2", "modelo 2", "abc-7899", 80, 100, 2);
carro2.ImrpimirDados();

let carro3:Carro = new Carro("marca 3", "modelo 3", "def-12346", 8, 250, 3);
carro3.ImrpimirDados();

let carro4:Carro = new Carro("marca 4", "modelo 4", "def-2564", 45, 125, 4);
carro4.ImrpimirDados();

let carro5:Carro = new Carro("marca 5", "modelo 5", "hij-12346", 0, 125, 2);
carro5.ImrpimirDados();

let carro6:Carro = new Carro("marca 6", "modelo 6", "hij-7894", 15, 80, 4);
carro6.ImrpimirDados();

let carro7:Carro = new Carro("marca 7", "modelo 7", "klm-12346", 27, 99, 1);
carro7.ImrpimirDados();

let carro8:Carro = new Carro("marca 8", "modelo 8", "klm-7624", 36, 125, 2);
carro8.ImrpimirDados();

let carro9:Carro = new Carro("marca 9", "modelo 9", "nop-12346", 41, 75, 2);
carro9.ImrpimirDados();

let carro10:Carro = new Carro("marca 10", "modelo 10", "xyz-12346", 0, 125, 4);
carro10.ImrpimirDados();

let aviao1:Aviao = new Aviao("aviação company 1", "aviao 1", "zzzz", 150, 300, 36);
aviao1.ImrpimirDados();

let aviao2:Aviao = new Aviao("aviação company 2", "aviao 2", "qrg123", 0, 300, 36);
aviao2.ImrpimirDados();

let aviao3:Aviao = new Aviao("aviação company 3", "aviao 3", "adhvf4528", 300, 1000, 250);
aviao3.ImrpimirDados();

let aviao4:Aviao = new Aviao("aviação company 4", "aviao 4", "sfgdfg576", 150, 428, 100);
aviao4.ImrpimirDados();

let aviao5:Aviao = new Aviao("aviação company 5", "aviao 5", "zxcbv357951", 41, 300, 50);
aviao5.ImrpimirDados();

Veiculo.ImprimirQuantidadeDeVeiculosCriados();