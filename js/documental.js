
function closeWaitScreen() {
  $('.wait-screen').css('display', 'none');
}

function onLoadPage() {
  const world_map = document.getElementById('map');
  const interactive_map = document.getElementById('gameContainer');
  const btn_world = document.getElementById('world-map');
  const btn_interactive = document.getElementById('interactive-map');
  const instructions = document.getElementById('instuctions');
  btn_world.addEventListener('click', () => {
    world_map.classList.remove("hidde-element");
    interactive_map.classList.add("hidde-element");
    instructions.classList.add("hidde-element");
  })
  btn_interactive.addEventListener('click', () => {
    interactive_map.classList.remove("hidde-element");
    instructions.classList.remove("hidde-element");
    world_map.classList.add("hidde-element");
  })
  closeWaitScreen();
}
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVuZGVsY3VhcnRhcyIsImEiOiJjamlveDZ3YTUwdW91M3BxaGN3NHNqMWFyIn0.EnbWjk5wHR478Pgi95UjOQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  zoom: 8,
  center: [-76.989, 3.875],
});


const geojson = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.002, 3.875]
      },
      properties: {
        title: 'video-uno',
        url: 'https://www.youtube.com/embed/MqZ6l46tV3g'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.198, 3.853]
      },
      properties: {
        title: 'video-dos',
        url: 'https://www.youtube.com/embed/fbNglufVzRQ'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.095, 3.686]
      },
      properties: {
        title: 'video-tres',
        url: 'https://www.youtube.com/embed/Sk0P86SKUzU'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.355, 3.993]
      },
      properties: {
        title: 'Sixta Zambrano',
        url: 'https://www.youtube.com/embed/airtVzrKZk8'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.307, 3.361]
      },
      properties: {
        title: 'Sixta Zambrano',
        url: 'https://www.youtube.com/embed/irdFkdVOwUY'
      }
    }
  ]
};



map.on('load', function () {
  geojson.features.forEach(function (marker) {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<iframe src="${marker.properties.url}" frameborder="0" allowfullscreen></iframe>`))
      .addTo(map);
  });
})

