# Realtime Parkings Gent

Dit project is een demonstratie voor de opleiding **Applicatie- en Databeheer** (3e graad) aan de **Spectrum School**. Het illustreert hoe je data van een externe API kunt ophalen, verwerken en weergeven in een webapplicatie.

---

## 🌟 Over dit project

De webapplicatie haalt real-time parkeerinformatie op van de **Stad Gent API**. Deze gegevens worden weergegeven op een eenvoudige webpagina met:
- Naam van de parking.
- Maximale capaciteit.
- Aantal beschikbare en bezette plaatsen.
- Openingsstatus (open/gesloten).

Het project biedt een hands-on ervaring met **API's**, **HTML**, **CSS**, en **JavaScript**.

---

## 🚗 Wat doet deze API?

De gebruikte API biedt real-time gegevens over parkeergarages in Gent, zoals:
- **Naam van de parking**: Identificeert de locatie.
- **Maximale capaciteit**: Hoeveel voertuigen er in de garage kunnen.
- **Beschikbare capaciteit**: Hoeveel vrije plaatsen er nog zijn.
- **Status**: Geeft aan of de parkeergarage momenteel open of gesloten is.

De gegevens worden opgehaald van:
[Stad Gent API](https://data.stad.gent/api/explore/v2.1/console).

---

## 📖 Instructies voor gebruik

### Vereisten
1. Een browser zoals Google Chrome.
2. Een actieve internetverbinding om de Stad Gent API te bereiken.

### Technologieën
Dit project maakt gebruik van:
- **HTML**: Structuur van de webpagina.
- **CSS**: Basisstijl voor een nette presentatie.
- **JavaScript**: Logica om API-data op te halen en weer te geven.

---

### Installatie
1. Clone de repository naar je lokale machine:
   ```bash
   git clone https://github.com/spectrum-joris/Realtime-Parkings-Gent.git
   ```
2. Navigeer naar de projectmap:
   ```bash
   cd Realtime-Parkings-Gent
   ```
3. Open `index.html` in je browser om de applicatie te bekijken.

---

## 🛠 Hoe werkt het?

1. **API Oproep**:
   De applicatie gebruikt de **Fetch API** om real-time gegevens op te halen van de Stad Gent API.
2. **Data Processing**:
   De gegevens worden verwerkt en dynamisch weergegeven op de webpagina.
3. **Weergave**:
   Voor elke parkeergarage worden de volgende gegevens getoond:
   - Naam.
   - Maximale capaciteit.
   - Aantal bezette en beschikbare plaatsen.
   - Status (open/gesloten).

---

### Voorbeeld JavaScript Code

Hier is een voorbeeld van hoe de data wordt opgehaald en weergegeven:
```javascript
const apiUrl = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=13";

async function fetchParkingData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.results); // Toont de gegevens in de console
    } catch (error) {
        console.error("Fout bij het ophalen van de gegevens:", error);
    }
}
fetchParkingData();
```

---

## 🎓 Doelgroep

Dit project is bedoeld voor studenten van de opleiding **Applicatie- en Databeheer** die:
- Willen leren hoe API's werken.
- Data dynamisch willen weergeven in een webapplicatie.
- Meer ervaring willen opdoen met JavaScript, HTML en CSS.

---

## 📬 Contact

Voor vragen of suggesties, neem contact op via:
- **Naam**: Joris
- **School**: [Spectrum School](https://www.spectrumschool.be)
- **Email**: [joris@example.com](mailto:joris@example.com)

---

Veel succes met het leren over API's! 🚀
