/*
const hodinovaSazba = Number(prompt('Zadej svou hodinovou sazbu v korunach:'));
const pocetHodin = Number(prompt('KOlik hodin denne pracujes?'));
const pocetDni = Number(prompt('Kolik dni mesicne pracujes?'));

document.body.innerHTML += "<p>" + (hodinovaSazba * pocetHodin * pocetDni) + "</p>";
*/
//////////////////////////////////////////////////////////
// Vytvořte funkci salary se třemi parametry

// wage - hrubá mzda v korunách za hodinu
// hours - kolik hodin denně průměrně pracujete
// days - kolik dní v měsící průměrně pracujete
// Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

// Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

// Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.

const salary = (wage, hours, days) => {
  return Math.round(wage * hours * days);
};

const taxed = (salary, tax) => {
  return Math.round((salary * (100 - tax)) / 100);
};

const wage = 250;
const hours = 8;
const days = 20;

const beforeTax = salary(wage, hours, days);
const afterTax = taxed(beforeTax, 15);

document.body.innerHTML += `
<p>Wage: ${wage} Kč</p>
<p>Hours: ${hours} </p>
<p>Days: ${days} </p>
<p>Before taxation: ${beforeTax} </p>
<p>After taxation: ${afterTax} </p>
`;