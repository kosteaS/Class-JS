class Masina {
    constructor(marca, model, culoare, kilometraj) {
      this.marca = marca;
      this.model = model;
      this.culoare = culoare;
      this.kilometraj = kilometraj;
    }
  
    get proprietati() {
      return `Masina[marca=${this.marca.toUpperCase()}, 
        model=${this.model.toUpperCase()}, 
        culoare=${this.culoare.charAt(0).toUpperCase() + this.culoare.slice(1).toLowerCase()}, 
        kilometraj=${this.kilometraj}]`;
    }
  }
 
     module.exports = Masina;
//Functie pentru tema 1
//  function main() {
//    const m1 = new Masina("Volvo", "XC-60", "Negru", "234 000");
//    const m2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
//    const m3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");
  
 //   console.log(m1.proprietati);
 //   console.log(m2.proprietati); 
 //   console.log(m3.proprietati); 
 // }
  
//  main();
 
  
  
  
  
  
  