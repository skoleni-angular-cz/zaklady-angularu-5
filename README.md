# Základy Angularu - Cvičení 5 - Testing Angular aplikací

V projektu jsou připraveny Angular jednotky různého druhu. Vaším úkolem bude navrhnout vhodné testy a testy implementovat.

U některých testovacích sad se omezíme pouze na vyzkoušení testingu určitých Angular jednotek bez další elaborace testovacích scénářů.

Všechny testované jednotky mají GUI, které si lze vyzkoušet a oklikat po spuštění `npm start`.

Soubor `db.json` lze použít ke spuštění mock backend serveru pro úkolníček https://www.npmjs.com/package/json-server.

Příkaz: `json-server --watch db.json`.

# Dílčí práce k provedení

## 1. Odhalte za pomoci vhodně navržených unit testů chybu v utilitních funkcích v `address-utils.ts`.
*Bonus: Zkuste zjistit (z hlavy nebo pomocí rozšíření IDE) cyklomatickou složitost funkcí v `address-utils.ts`. Cyklomatická složitost udává, kolik minimálně test casů bude potřeba ke kompletnímu otestování nějaké funkce.*

## 2. Navrhněte vhodné test casy a otestujte `ParkingPriceService`. V rámci testování bude potřeba zamockovat `StateHolidaysService`. (cca. 7 test cases)
*Bude také potřeba potlačit varianci v konstantě `ParkingPriceService.CURRENT_YEAR`.*

## 3. Napište jeden test case s jednoduchou asercí pro `FileSizePipe`. (1 test case)

## 4. Otestujte kompletně `MyButtonComponent`. Včetně view. (3 test cases)
*Nápověda: Pro testování event emitteru je nutné vystavit spy na buttonClicked.emit.*

## 5. Otestujte kompletně `TodosComponent`. Bez view. Mělký test bez dependencí. (cca. 6 test cases)
*Vytvořte Spy Object pro `ApiTodoService`, přes který budete kontrolovat volání jednotlivých API metod, aniž by fyzicky docházelo k HTTP requestům.*
