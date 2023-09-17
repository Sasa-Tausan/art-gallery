'use strict';

const map = L.map('map').setView([41.481440884862586, -71.31036566441779], 13);

const iconLocation = L.icon({
  iconUrl: './assets/icon-location.svg',
  iconSize: [40, 53],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([41.481440884862586, -71.31036566441779], {
  icon: iconLocation,
}).addTo(map);
