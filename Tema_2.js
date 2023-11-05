const Masina = require('./Tema_1');
class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj) {
      super(marca, model, culoare, kilometraj);
    }
  
    participaLaCampionat(pozitiaInCampionat) {
      if (pozitiaInCampionat > 0) {
        console.log(`Am castigat locul ${pozitiaInCampionat}`);
      } else {
        console.log("Nu am castigat niciun premiu");
      }
    }
  }
  
  function main() {
    const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", "10 0000");
    const m2 = new MasinaDeCurse("Ferrari", "F1", "Rosu", "10 000");
    const m3 = new MasinaDeCurse("Renault", "Clio", "Alb", "50 000");
  
    m1.participaLaCampionat(30); // Va afișa: Am castigat locul 30
    m2.participaLaCampionat(1); 
    m2.participaLaCampionat(-1);// Va afișa: Nu am castigat niciun premiu

    console.log(m1.proprietati); // Va afișa proprietățile masinii cu premiu
    console.log(m2.proprietati); // Va afișa proprietățile masinii fără premiu
    console.log(m3.proprietati);
  }
  
  main();

  
  
  
  
  
  