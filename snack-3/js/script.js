/*

Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
Crea un nuovo array con la lista dei mammiferi.
[ 
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ }, 
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ }, 
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ }, 
]

*/

const animals = [
    {nome: "Cavallo", famiglia: "Equidi", classe: "Mammiferi"},
    {nome: "Leone", famiglia: "Felidi", classe: "Mammiferi"},
    {nome: "Koala", famiglia: "Fascolarctidi", classe: "Mammiferi"},
    {nome: "Squalo", famiglia: "Squallidi", classe: "Pesci"},
    {nome: "Ragno", famiglia: "Araneidi", classe: "Arachnida"}

]


console.log(animals);


const animalsMammiferi = [];

for (let i = 0; i < animals.length; i++) {
  const currAnimals = animals[i];
  const currMammiferi =  currAnimals.classe; 
  if (currMammiferi === "Mammiferi") {
    animalsMammiferi.push(currAnimals);
} 

}
console.log(animalsMammiferi);

