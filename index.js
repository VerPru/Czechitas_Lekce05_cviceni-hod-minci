// 1. Vytvoření proměnné padlOrel, která má hodnotu true nebo false podle náhodné hodnoty
const padlOrel = Math.random() < 0.5;

// 2. Vybrání elementu s třídou .vysledek a nastavení jeho textového obsahu
const vysledekElement = document.querySelector('.vysledek');
if (padlOrel) {
    vysledekElement.textContent = 'Padl orel';
} else {
    vysledekElement.textContent = 'Padla panna';
}

// 3. Vybrání elementu s třídou .mince a přidání nové třídy podle hodnoty padlOrel
const minceElement = document.querySelector('.mince');
if (padlOrel) {
    minceElement.classList.add('mince--orel');
} else {
    minceElement.classList.add('mince--panna');
}