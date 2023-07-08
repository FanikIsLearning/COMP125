"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House Directions
    Author: 
    Date:   

    Filename: js10b.js
*/

// Function to set up and display the Oak Top House Map
function initMap() {
  // Page objects
  let displayMap = document.getElementById("displayMap");
  let routeBox = document.getElementById("routeBox");

  // Create a map to the Oak Top House
  //43.88074435476315, -79.31239016428276
  //let casaLoma = { lat: 43.88074435476315, lng: -79.31239016428276 };
  let casaLoma = { lat: 43.678, lng: -79.4093 };

  let myMap = new google.maps.Map(displayMap, {
    zoom: 11,
    center: casaLoma,
    fullscreenControl: false,
  });

  // Add a marker for the Casa Loma
  new google.maps.Marker({
    position: casaLoma,
    map: myMap,
    title: "Casa Loma",
  });

  // Get the device’s current position
  navigator.geolocation.getCurrentPosition(getPos, handleError);

  function getPos(pos) {
    let myPosition = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    };
    console.log(myPosition);

    // Set up direction service and rendering
    let routeFind = new google.maps.DirectionsService();
    let routeDraw = new google.maps.DirectionsRenderer();

    // Drive from current location to Casa Loma
    let myRoute = {
      origin: myPosition,
      destination: casaLoma,
      travelMode: "DRIVING",
    };

    // Generate directions for the route
    routeFind.route(myRoute, function (result, status) {
      if (status == "OK") {
        routeDraw.setDirections(result);
        // Display route and directions
        routeDraw.setMap(myMap);
        routeDraw.setPanel(routeBox);
      } else {
        routeBox.textContent = "Directions Unavailable: " + status;
      }
    });
  }

  // In case of geolocation error
  function handleError(err) {
    console.log("Geolocation error: " + err.message);
  }
}
