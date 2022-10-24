
//1 - Setup the map and define starting position
var mymap = L.map('mapid').setView([-34.9, 138.6], 13);

//Initialize markers layer as a global variable
var markers=[];

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieWVpYW4iLCJhIjoiY2tya2I1YWJzMTRxeTJ3cGVpYzh5N2tvNyJ9.CmIRugthdrqw1B1sRx5yGg'
}).addTo(mymap);


//2 - Tag location on map
const tagLocation = (record) =>{

    console.log("tagLocation running"); //debug
    let lat, long, parsedLat, parsedLong, marker, circle;
    let deviceId, faultCode, faultDescription, faultDateTime;

    //Set lat long values
    lat = record.location.lat
    long = record.location.long
    deviceId = record.device_id
    faultCode = record.faultCode
    faultDescription = record.faultDescription
    faultDateTime = record.dateTime

    //parse lat long values to float
    parsedLat = parseFloat(lat);
    parsedLong = parseFloat(long);

    //Prepare popup message
    popupMsg = `<div id="marker-popup">${deviceId}<br>(${faultCode}) ${faultDescription}<br>${faultDateTime}<br></div>`

    //Create marker and add to map
     marker = L.marker([parsedLat,parsedLong]).addTo(markers);
     marker.bindPopup(popupMsg).openPopup();

    //  //create a circle and add to map
    //  circle = L.circle([parsedLat, parsedLong], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 500
    // }).addTo(markers);

    //Pan to location of new marker on map
    mymap.panTo([parsedLat, parsedLong]);
}
// const tagLocation = (record_lat, record_long) =>{

//     console.log("tagLocation running"); //debug
//     let lat, long, parsedLat, parsedLong, marker, circle;

//     //Set lat long values
//     lat = record_lat
//     long = record_long

//     //parse lat long values to float
//     parsedLat = parseFloat(lat);
//     parsedLong = parseFloat(long);

//     //Create marker and add to map
//      marker = L.marker([parsedLat,parsedLong]).addTo(markers);
//      marker.bindPopup("<b>G1234567</b><br>Device Unplugged<br>2020-10-17").openPopup();

//     //  //create a circle and add to map
//     //  circle = L.circle([parsedLat, parsedLong], {
//     //     color: 'red',
//     //     fillColor: '#f03',
//     //     fillOpacity: 0.5,
//     //     radius: 500
//     // }).addTo(markers);

//     //Pan to location of new marker on map
//     mymap.panTo([parsedLat, parsedLong]);
// }

const showAllMarkers =()=>{

    var latlngArr = [];
    
    //Loop to retrieve the lat and long of all markers on the map
    for (var i=1;i<Object.keys(mymap._targets).length ; i++){

        var latlng;
        console.log(Object.values(mymap._targets[Object.keys(mymap._targets)[i]]._latlng)); //Debug

        //Store array of lat and long value for marker
        latlng = Object.values(mymap._targets[Object.keys(mymap._targets)[i]]._latlng);
        
        //Add lat long array to larger array
        latlngArr.push(latlng)
    }

    console.log(latlngArr); //Debug

    //Pass array of marker lat longs into fit bounds method
    mymap.fitBounds(latlngArr);
}

const deleteAllMarkers = () =>{

    //Haven't figured this out yet

}


//### OTHER CODE BELOW TO REFER TO


// var circle = L.circle([-34.922084, 138.600317], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [-34.922084, 138.6],
//     [-34.89, 138.5],
//     [-34.90, 138.4]
// ]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup();

// function onMapClick(e) {

//     console.log(e.latlng);
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);


//     var circle = L.circle([e.latlng.lat, e.latlng.lng], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 500
//     }).addTo(mymap);
// }

// mymap.on('click', onMapClick);