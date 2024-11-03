function chooseCoffee() {
  const coffees = ["caffè latte", "cappuccino", "flat white", "cortado", "latte macchiato"];
  const randomCoffee = document.getElementById("random-coffee");
  randomCoffee.innerText = coffees[Math.floor(Math.random() * coffees.length)];
}

if (document.querySelector("body").classList.contains("home")) chooseCoffee();