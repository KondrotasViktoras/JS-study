function yourName(name) {
  return name;
}

console.log(yourName("Viktoras"));

function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

console.log(randomNumber());

function nameLength(n1, n2) {
  return n1.length + n2.length;
}

console.log(nameLength("Viktoras", "Kondrotas"));

function abc(n1) {
  const abecele = ["A", "B", "C", "D", "E", "F", "G"];
  return abecele[n1 - 1];
}

console.log(abc(5));

function mathOperations(n1, n2, operator) {
  //   let operator;
  if (operator === "sum") {
    return n1 + n2;
  }
  if (operator === "sub") {
    return n1 - n2;
  }
  if (operator === "div") {
    return n1 / n2;
  }
  if (operator === "multi") {
    return n1 * n2;
  } else {
    console.log("nera tokio operatoriaus");
  }
  return operator;
}

console.log(mathOperations(2, 2, "multi"));

function randomz() {
  return Math.floor(Math.random() * 10) + 1;
}
function squareNumber(n1) {
  return Math.pow(n1, 2);
}

console.log(squareNumber(randomz()));

document.querySelector("#mybutton").addEventListener("click", showMyName);

function showMyName() {
  console.log("Viktoras");
}

document.querySelector("#tekstas").addEventListener("click", () => {
  document.querySelector("p").innerText = "laba diena laba diena";
});

let counter = 0;

document.querySelector("#plus").addEventListener("click", () => {
  counter++;
  document.querySelector("h1").innerText = counter;
});

document.querySelector(".copyChild").addEventListener("copy", dontCopy);

function dontCopy() {
  alert("DONT COPY");
}

document.querySelector(".random100").addEventListener("click", () => {
  const randomNumber = randomh100();
  document.querySelector(".randomh1").innerText = randomNumber;
});

function randomh100() {
  return Math.floor(Math.random() * 100) + 1;
}

document.querySelector(".over18").addEventListener("click", () => {
  document.querySelector(".alus").innerText = "Alus";
});

document.querySelector(".under18").addEventListener("click", () => {
  document.querySelector(".alus").innerText = "nieko neturime";
});

function random123() {
  return Math.floor(Math.random() * 3) + 1;
}
const num123 = random123();
console.log(num123);

document
  .querySelector(".one")
  .addEventListener("click", () =>
    num123 === 1 ? alert("YAY") : alert("nay")
  );
document
  .querySelector(".two")
  .addEventListener("click", () =>
    num123 === 2 ? alert("YAY") : alert("nay")
  );
document
  .querySelector(".three")
  .addEventListener("click", () =>
    num123 === 3 ? alert("YAY") : alert("nay")
  );

document.querySelector(".press").addEventListener("click", () => {
  document.querySelector(".doNotPress").innerText = "Neklausote Manes";
});

document.querySelector(".redH1").addEventListener("mousemove", () => {
  document.querySelector(".redH1").innerText = "Kiek galima neklausyti";
});
