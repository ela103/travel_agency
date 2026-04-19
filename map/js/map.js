// Ajouter un style CartoDB avec un fond plus stylisé
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CartoDB'
}).addTo(map);
// Ajouter un style de MapTiler
L.tileLayer('https://{s}.tile.maps.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
var voitureIcon = L.icon({
    iconUrl: 'https://example.com/icon_voiture.png',  // Icône personnalisée
    iconSize: [50, 50],
    iconAnchor: [25, 50],  // Pour centrer l'icône
    popupAnchor: [0, -40]  // Ajuste l'endroit où le popup s'affiche
});

var monumentIcon = L.icon({
    iconUrl: 'https://example.com/icon_monument.png',  // Icône monument
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

// Ajouter une voiture sur la carte
L.marker([48.8584, 2.2945], { icon: voitureIcon }).addTo(map).bindPopup('Voiture sélectionnée');

// Ajouter un monument sur la carte
L.marker([48.8606, 2.3376], { icon: monumentIcon }).addTo(map).bindPopup('Monument célèbre');
L.Marker.movingMarker([startLatLng, endLatLng], [2000, 5000], {
    icon: voitureIcon
}).addTo(map).start();
