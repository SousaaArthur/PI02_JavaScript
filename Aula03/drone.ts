class Drone{

  qtdCamereras:number;
  marca:string = "Sony";
  modelo:string = "A105";
  velocidade:number = 0;

  constructor(qtdCameras:number){
    this.qtdCamereras = qtdCameras;
  }

  acelerar(novaVelocidade?:number){
    if (novaVelocidade === undefined){
      this.velocidade += 10;
    } else {
      this.velocidade += novaVelocidade;
    }
  }
}

const drone1 = new Drone(4);
const drone2 = new Drone(3);

drone1.acelerar();
drone2.acelerar(30);

console.log(`Vel. Drone 1: ${drone1.velocidade}`);
console.log(`Vel. Drone 2: ${drone2.velocidade}`);
