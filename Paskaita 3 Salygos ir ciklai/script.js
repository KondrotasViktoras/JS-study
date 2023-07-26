let car = "ford";

switch (car) {
    case "vw":
    case 'audi':
    case 'Bentley':
    case 'Bugatti':
    case 'Lamborghini':
    case 'Porsche':
        console.log(`${car} prisklauso vw group`);             
        break;
    case 'BMW':
    case 'Mini':
    case 'Rolls-Royce':
    console.log(`${car} priklauso bmw group`);
    default:
        console.log(`${car} nezinau kam priklauso`);
        break;
}

let userInput = "Obuolys";

switch (userInput) {
    case "Poras":
    case "Pomidoras":
    case "Sparagas":
    case "Bulve":
    case "Paprika":
        console.log(`${userInput} yra darzove`);
        break;
    case "Slyva":
    case "Kriause":
    case "Obuolys":
    case "Arbuzas":
    case "Meleonas":
        console.log(`${userInput} yra vaisius`);
        break;
    default:
        console.log(`${useInput} turbut paciupai saldaini`);
        break;


}

let weekDay = 4;

switch (weekDay) {
    case 1:
        weekDay = "Pirmadienis"
        console.log(`${weekDay}`);
        break;
    case 2:
        weekDay = "Antradienis"
        console.log(`${weekDay}`);
        break;
    case 3:
        weekDay = "Treciadienis"
        console.log(`${weekDay}`);
        break;
    case 4:
        weekDay = "Ketvirtadienis"
        console.log(`${weekDay}`);
        break;
    case 5:
        weekDay = "Penktadienis"
        console.log(`${weekDay}`);
        break;
    case 6:
        weekDay = "Sestadienis"
        console.log(`${weekDay}`);
        break;
    case 7:
        weekDay = "Sekmadienis"
        console.log(`${weekDay}`);
         break;    

    default:
        console.log(`${weekDay} tokios dienos nera`);
        break;
}

const name = "Viktoras";

name.length < 5 ? console.log("Short Name") : console.log("Long Name");

const legalAge = 18;
let clientAge = 100;

clientAge < 0 || clientAge > 120 ? console.log("Invalid Age") : clientAge > legalAge ? console.log("can drive") : console.log("can not drive");

let phone = "Iphone";
let isIphoneUser = phone === "Iphone";

console.log(isIphoneUser);

for(let i = 0; i < 10; i++){
    console.log(i + " Viktoras");
}

for(let i = 10; i > 0; i--){
    console.log(i);
}

const name1 = 'John';
const count = 10;
for (let i = 0; i < count; i++) {
  console.log(name);
}

let i = 10;
while(i > 0) {
  console.log(i);
  i--;
}