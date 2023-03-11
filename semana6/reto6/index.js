const inputBill = document.querySelector("#input-bill");
const numberPeople = document.querySelector("#number-people");
const custom = document.querySelector(".custom");

const percentageFive = document.querySelector("#percentage-5");
const percentageTen = document.querySelector("#percentage-10");
const reset = document.querySelector(".reset");

const tip = document.querySelector(".tip");
const total = document.querySelector(".total");

function calculateTip(percentage) {
  const bill = Number(inputBill.value);
  const people = Number(numberPeople.value);

  if (!bill || !people) {
    alert("Debes rellenar todos los campos");
    return;
  }

  const result = (bill * (percentage / 100)) / people;
  const rtotal = (bill + bill * (percentage / 100)) / people;

  tip.textContent = `S/ ${result.toFixed(2)}`;
  total.textContent = `S/ ${rtotal.toFixed(2)}`;
}

percentageFive.onclick = () => calculateTip(5);

percentageTen.onclick = () => calculateTip(10);

reset.onclick = () => {
  inputBill.value = "";
  numberPeople.value = "";
  custom.value = "";
  tip.textContent = "S/ 0.00";
  total.textContent = "S/ 0.00";
  inputBill.focus();
};
