
let destination = {lat:36.5142763, lng: -4.8696375};

let map = document.getElementById("map");


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: destination,
    zoom: 18,
    mapId: "313c422e82ade0f413fa1af9",
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
    map.setOptions({disableDefaultUI: true});
    navigator.geolocation.getCurrentPosition(function(position) {
  let origin = new google.maps.LatLng(Number(position.coords.latitude), Number(position.coords.longitude));

        createMap(origin, destination);
    });
}

initMap();

async function createMap(origin, destination) {
    var mapData = {
    zoom: 18,
    center: destination,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapId: "313c422e82ade0f413fa1af9",
    };

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    var map = new google.maps.Map(document.getElementById('map'), mapData);
    map.setOptions({disableDefaultUI: true});

    var originMarker = new AdvancedMarkerElement({
        map: map,
        position: origin,
        });    

     var destinationMarker = new AdvancedMarkerElement({
        map: map,
        position: destination,
        draggable: true,
        title: 'Taller Tip Top',       
        });

    var howArrive = document.getElementById('how-arrive');

    howArrive.addEventListener('click', function() {
      drawRoute(map, origin, destination);
      originMarker.setMap(null);
      destinationMarker.setMap(null);
    });

    const infoWindow = new google.maps.InfoWindow({
        content:'<h4>TIP TOP TALLER</h4>' + 
                '<p class="marca">c/Diamante, 37</p>' +
                '<p class="marca">29603, Marbella</p>',
            });

    destinationMarker.addListener ("gmp-click",()=>{
        infoWindow.open({
            anchor:destinationMarker,
            mapa:map,
            shouldFocus:false,
            mapId: "313c422e82ade0f413fa1af9",
            })
    })
} 

function drawRoute(map, origin, destination) {

    var directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map,
        panel: document.getElementById("panel"),
        supressMarkers: true,
        });
          
    directionsRenderer.setMap(map);
    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING'
            }, function(response, status) {
              if(status === 'OK') {
                directionsRenderer.setDirections(response);
              } else {
                alert('No se pudo establecer el recorrido. ', status);
              }
        });
    }
          
        
    
