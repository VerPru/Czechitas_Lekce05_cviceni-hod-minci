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

/*	1.	Náhodné přiřazení hodnoty: padlOrel má hodnotu true nebo false na základě náhodné hodnoty generované pomocí Math.random().
	2.	Výběr a úprava textu pro .vysledek: Pomocí document.querySelector('.vysledek') vyberu element a podle hodnoty padlOrel nastavím odpovídající text.
	3.	Přidání třídy k elementu .mince: Vyberu element s třídou .mince a podle hodnoty padlOrel přidám buď třídu mince--orel nebo mince--panna.

Tento kód by měl zajistit, že se při načtení stránky zobrazí náhodně buď “Padl orel” nebo “Padla panna” a zároveň se přidá odpovídající třída k elementu .mince.
*/