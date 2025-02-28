// SNACK #1 //

// CREA UN ARRAY COMPOSTO DA 10 AUTOMOBILI, ogni modello dovrà avere: marca, modello, alimentazione (benzina, diesel, elettrico, gpl, a metano) //

// DIVIDI LE AUTO IN 3 ARRAYS SEPARATI: nel 1° metti solo le auto a benzina, nel 2° solo le auto a diesel, nel terzo tutto il resto delle auto //

// INFINE STAMPA TUTTI E 3 ARRAY //

const cars = [
    { marca: "Mercedes", modello: "GLK", alimentazione: "Diesel"  },
    { marca: "Bmw", modello: "Serie-1", alimentazione: "Diesel" },
    { marca: "Volvo", modello: "XC-60", alimentazione: "Benzina" },
    { marca: "Audi", modello: "Q3", alimentazione: "Benzina" },
    { marca: "Fiat", modello: "Panda", alimentazione: "Gpl" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "Elettrica" },
    { marca: "Suzuki", modello: "Alto", alimentazione: "Elettrica" },
    { marca: "Ford", modello: "Fiesta", alimentazione: "Metano" },
    { marca: "Tesla", modello: "Model-Y", alimentazione: "Elettrica" },
    { marca: "Citroen", modello: "C3", alimentazione: "Benzina" }];

    console.log(cars); 

  const carsBenzina = [];
  const carsDiesel = [];
  const carsRestanti = [];




