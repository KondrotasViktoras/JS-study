const namez = "Viktoras";
let i = 0;

while (i < 3) {
    i++;
    console.log(namez);
} 

let combo = ""
let times = 0;

do {
    combo += " Viktoras"
    times++;
} while (times < 5);
console.log(combo);

const math111 = Math.cos(0);
console.log(math111);

const random1 = Math.floor(Math.random() * 5) + 1;
console.log(random1);

const random2 = Math.floor(Math.random() * 8) + 5;
console.log(random2);

const random3 = Math.floor(Math.random() * 2) + 1;
console.log(random3);
if (random3 === 1) {
    console.log("YOU WIN");  
}else console.log("YOU LOSE");

// document.body.innerHTML = "<h2>Viktoras</h2>"

let h1Element = "<h1>Viktoras</h1>"
document.body.innerHTML += h1Element;

let vardas = document.querySelector('#unknown');
vardas.textContent = "Viktoras";

let listz = document.querySelector('ul > li:last-child');
listz.textContent = "Suriasas";

let textz = document.querySelector('p:nth-child(2) > span');
textz.textContent = "blue";

let carzBMW = document.querySelector('ol li:first-child').textContent;
let carzVW = document.querySelector('ol li:nth-child(2)').textContent;

document.querySelector('ol li').textContent = carzVW;
document.querySelector('ol li:nth-child(2)').textContent = carzBMW;