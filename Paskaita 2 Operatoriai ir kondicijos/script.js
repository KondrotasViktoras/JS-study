let legalAge = 20;
let clientAge = 33;

if (legalAge >= clientAge) {
    console.log('neparduok alco');
} else{
    console.log('gali pirkti, ka tik nori');
}

// const clientAge = 16;
// const legalAge = 20;
// if (clientAge >= legalAge) {
//   console.log(`Pasiekęs ${legalAge}`);
// } else {
//   console.log(`Nepasiekęs ${legalAge}`);
// }

const Vardas = "Viktoras";
console.log(`${Vardas} turi ${Vardas.length} raides.`);
if (`${Vardas.length}` <= 6){
    console.log(`${Vardas} yra trumpas vardas.`)
} else {
    console.log(`${Vardas} yra ilgas vardas.`)
}

let myAge = 32;

if (myAge > 100 || myAge < 0) {
    console.log('Invalid Age')
} else if (myAge < 18 && myAge > 1) {
    console.log('Child')
} else if (myAge > 19 && myAge < 99) {
    console.log('adult')
}

const car = focus;

if (car === 'VW' || car === 'AUDI' || car === 'Bentley' || car === 'Lamborghini' || car === 'Porsche'){
    console.log('priklauso VW Group')
} else if (car === 'BMW' || car === 'mini' || car === 'Rolls-Royce'){
    console.log('priklauso BMW Group')
} else {
    console.log('nepriklauso nei vienai grupei')
}
