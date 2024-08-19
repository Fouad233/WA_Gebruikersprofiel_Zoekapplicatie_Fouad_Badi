# Gebruikersprofiel Zoekapplicatie

Dit project is een eenvoudige webapplicatie waarmee gebruikers kunnen zoeken naar andere gebruikersprofielen en hun gegevens kunnen bekijken. Gebruikers kunnen profielen opslaan in de LocalStorage en snel toegang krijgen tot de opgeslagen gegevens.

### Functionaliteiten

- **Elementen selecteren:** Elementen worden geselecteerd met behulp van `document.getElementById()` en `document.querySelector()` in de HTML- en JavaScript-bestanden. Bijvoorbeeld in `fetchData.js` voor het selecteren van de zoekknop en het gebruikersformulier.
  
- **Elementen manipuleren:** Elementen worden gemanipuleerd met behulp van de DOM-manipulatiemethoden zoals `innerHTML`, `textContent`, en het instellen van attributen in de HTML- en JavaScript-bestanden. Bijvoorbeeld, de lijst met gebruikers wordt dynamisch gegenereerd en weergegeven in `fetchData.js`.

- **Event aan een element koppelen:** Eventlisteners worden toegevoegd aan elementen zoals knoppen met behulp van `addEventListener()` in de JavaScript-bestanden. Bijvoorbeeld, de zoekknop en de login-knop hebben eventlisteners voor het uitvoeren van specifieke acties wanneer erop wordt geklikt (`fetchData.js`).

- **Formulier valideren:** Hoewel er geen uitgebreide formuliervalidatie is, wordt er wel gecontroleerd of de gebruikersnaam is ingevuld voordat de zoekopdracht wordt uitgevoerd (`fetchData.js`).

- **Gebruiken van een constante:** Belangrijke variabelen zoals de URL voor de API-aanroep worden gedefinieerd als constanten in de JavaScript-bestanden (`fetchData.js`).

- **Gebruiken van template literals:** Template literals worden gebruikt om dynamische HTML-structuren te genereren in de JavaScript-bestanden. Bijvoorbeeld bij het genereren van de lijst met gebruikers (`fetchData.js`).

- **Destructuring:** Destructuring wordt toegepast bij het uitpakken van objecten, zoals bij het verwerken van gebruikersgegevens die uit de API worden opgehaald (`fetchData.js`).

- **Spread & Rest operator:** De spread-operator wordt gebruikt om arrays en objecten samen te voegen (`fetchData.js`). Bijvoorbeeld bij het samenvoegen van twee arrays en het combineren van objecten.

- **Iteration over een array:** Er wordt over arrays geïtereerd om de gebruikerslijst te verwerken en weer te geven. Dit wordt gedaan met `forEach()` en `map()` methoden (`fetchData.js`).

- **Arrow function:** Arrow functions worden gebruikt voor het definiëren van anonieme functies en callback-functies in de JavaScript-bestanden (`fetchData.js`).

- **Callback function:** Callback-functies worden gebruikt bij asynchrone bewerkingen zoals het verwerken van gebruikersgegevens na een timeout (`fetchData.js`).

- **Promise:** Promises worden gebruikt voor het hanteren van asynchrone bewerkingen en het sequentieel uitvoeren van taken. Dit wordt gebruikt bij het ophalen van gebruikersgegevens met de Fetch API (`fetchData.js`).

- **Consumer methods:** Consumer-methoden zoals `map()` en `reduce()` worden gebruikt bij het verwerken van JSON-gegevens en het uitvoeren van berekeningen (`fetchData.js`).

- **Async & Await:** Async en Await worden gebruikt bij het vereenvoudigen van asynchrone code en het vermijden van callback hell. Dit wordt gebruikt in `fetchData.js` bij het ophalen van gegevens.

- **Self executing function:** Zelfuitvoerende functies worden gebruikt om bepaalde taken onmiddellijk uit te voeren bij het laden van de pagina, zoals het initialiseren van gebruikersgegevens (`fetchData.js`).

- **Fetch om data op te halen:** De Fetch API wordt gebruikt voor het ophalen van gegevens van een externe bron, zoals gebruikersprofielen (`fetchData.js`).

- **JSON manipuleren en weergeven:** JSON-gegevens worden gemanipuleerd en weergegeven voor verschillende doeleinden, zoals het tonen van gebruikersprofielen (`fetchData.js`).

- **Basis CSS Animatie:** Er zijn geen expliciete CSS-animaties toegevoegd, maar dit kan eenvoudig worden uitgebreid.

- **Gebruiken van een flexbox of CSS grid:** Flexbox wordt gebruikt voor het ontwerpen van een responsieve en aantrekkelijke lay-out voor de website (`styles.css`).

- **Gebruik van LocalStorage:** LocalStorage wordt gebruikt voor het opslaan en ophalen van gebruikersgegevens, zodat ze snel kunnen worden weergegeven wanneer de gebruiker opnieuw inlogt (`fetchData.js`).

### Bestandsstructuur

- **index.html:** Bevat de HTML-structuur voor de applicatie, inclusief het zoekformulier en het gebied waar gebruikersdetails worden weergegeven.
- **styles.css:** Bevat de CSS-styling voor de gehele website, inclusief layout en vormgeving.
- **fetchData.js:** Bevat de logica voor het zoeken naar gebruikers, het ophalen van gegevens via de Fetch API, het manipuleren van DOM-elementen, en het beheren van gebruikersgegevens in LocalStorage.

## Bronnen:

-[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

-[W3Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

-[StackOverflow](https://stackoverflow.com/questions/39993676/code-inside-domcontentloaded-event-not-working)

-[ChatGPT](https://chatgpt.com/share/5033528e-febd-42bd-84d3-b5e702055c58)

-[SheCodes](https://www.shecodes.io/athena/11142-how-to-add-a-click-event-listener-to-a-button-in-javascript)






