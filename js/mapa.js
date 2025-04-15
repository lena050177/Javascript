
let destination = {lat:36.5142763, lng: -4.8696375};

function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
          
        let origin = new google.maps.LatLng(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude));
    
        createMap(origin, destination);
    });
}

function createMap(origin, destination) {
    var mapData = {
    zoom: 18,
    center: destination,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
      
    var map = new google.maps.Map(document.getElementById('map'), mapData);
    var originMarker = new google.maps.Marker({
        map: map,
        position: origin,
        });           
     var destinationMarker = new google.maps.Marker({
        map: map,
        position: destination,
        draggable: true
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

    destinationMarker.addListener ("click",()=>{
        infoWindow.open({
            anchor:destinationMarker,
            mapa:map,
            shouldFocus:false,
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
          
        
    
