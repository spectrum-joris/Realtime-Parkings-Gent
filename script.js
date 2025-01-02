const apiUrl = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=13";

async function fetchParkingData() {
    const parkingContainer = document.getElementById("parking-data");

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        const parkings = data.results;

        parkings.forEach(parking => {
            const { name, totalcapacity, availablecapacity, isopennow } = parking;

            const occupied = totalcapacity - availablecapacity;
            const status = isopennow ? "Open" : "Gesloten";

            const parkingDiv = document.createElement("div");
            parkingDiv.className = "parking";

            parkingDiv.innerHTML = `
                <h3>${name}</h3>
                <p><strong>Maximale capaciteit:</strong> ${totalcapacity}</p>
                <p><strong>Aantal bezette plaatsen:</strong> ${occupied}</p>
                <p><strong>Beschikbare plaatsen:</strong> ${availablecapacity}</p>
                <p class="${isopennow ? 'open' : 'closed'}"><strong>Status:</strong> ${status}</p>
            `;

            parkingContainer.appendChild(parkingDiv);
        });
    } catch (error) {
        console.error("Er is een fout opgetreden:", error);
        parkingContainer.innerHTML = `<p style="color:red;">Kan de gegevens niet laden. Probeer het later opnieuw.</p>`;
    }
}

fetchParkingData();
