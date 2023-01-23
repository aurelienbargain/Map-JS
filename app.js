var map = L.map('map').setView([47.988178,  0.160791], 13);

var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

OpenStreetMap_France.addTo(map) //ajoute la map par la variable crée précédement

var marker = L.marker([47.988178,  0.160791]).addTo(map);