// Initialiseer de kaart
const map = L.map('map').setView([51.0488, 3.7234], 13); // Centraal in Gent

// Voeg een basislaag toe (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Voeg markers toe vanuit API-data
const parkings = [
    { name: "Savaanstraat", lat: 51.04877362543108, lon: 3.7234627726667133 },
    { name: "Ledeberg", lat: 51.03634169048174, lon: 3.738571094371151 },
    { name: "Sint-Michiels", lat: 51.05311004768356, lon: 3.719727740000235 }
];

parkings.forEach(parking => {
    L.marker([parking.lat, parking.lon]).addTo(map)
        .bindPopup(`<b>${parking.name}</b>`)
        .openPopup();
});
