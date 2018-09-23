/*
*   GoogleMapsinfoWindow-JS v1.0
*   Thomas Naylor
*
*   Demonstration of apply a custom HTML infoWindow on the Google Maps API
*   API: https://maps.googleapis.com/maps/api/js?key=YOURAPIKEY
*/

function initialize() {

    //map options
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(51.519156, -0.150050),
        disableDefaultUI: true
    };

    // Get the HTML DOM element that will contain the map
    var mapElement = document.getElementById('google-map-script');

    // create map using element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    setMarkers(map, officeLocations);

}

// Site title, Coordinates lat-long, desscription, ImageURL, ProjectURL
var officeLocations = [
    ['104 Marylebone High St', 51.519414, -0.151775, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/UHzCjxGhLWq0SMCj7HZC0w_pE0GGaako2gkQwP0JwqDOg7zLnH6cO23M443HcMdfgQPDFG4Jjne8cyaOe9a7MktL=s250', '#'],
    ['1 Duchess St', 51.519694, -0.143370, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/hrZzO_y_QO1fIyiRpoprlamNxkVq7c6nW2MYGltbyeywYcL1-EKcezSwEAXhB74oFHJAfjdvCDe0sc39V3WrF7U8=s250', '#'],
    ['172 Holland Park Ave', 51.500664, -0.179760, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/7bZScZsiSAfhfcGrHaoUIuVJ2CHjYDELFxyHHZ3HBfxAeO72MB66NGMkBBvS-IvufOyuahOaRkkaS6KTIFDtbqPn=s250', '#'],
    ['192 Queen\'s Gate', 51.500684, -0.179760, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/Jly8XPd6nNdcO4MyJbbG0xq1Vz7p0TdMfz28bjEfZ715ed9ck0j_X-geYm8RMONvbrkOxosia4KWO6I9itM0bLWZ=s250', '#'],
    ['7 Bentinck St', 51.517412, -0.150209, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/MeJciH4VC45mt4QcpCwpoHX5ZTN4SLs9HjxVYnxlKoA40kJtF6OAPmdG8O9E4BplbFhVylVI8EpDI_sFKe_YQCu7=s250', '#'],
    ['54 Weymouth St', 51.520338, -0.151099, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/g9xkA3HFbGtOM3K5FQDmiLyeYmsfuT21K02x9vur9ERABaud9rhORc8QTTekSa_-9uFe5dS_gb7sm7mROj4KhGI=s250', '#'],
    ['47 Marylebone Lane', 51.517824, -0.150897, 'Lorem ipsum dolor sit amet, mel offendit salutandi qualisque te, vix error aliquando et.','http://lh3.googleusercontent.com/btLOwOp1wjz707gp8VNOtwZ0N7P-iE1eVqbr0QVyLgMxN3vyHDEK3kowTFSdu7kM7SAH_lArwWDNuZ5VppOwBJM=s250', '#']
];

function setMarkers(map, locations)
{
    for (var i = 0; i < locations.length; i++) {

        var office = locations[i];
        var myLatLng = new google.maps.LatLng(office[1], office[2]);
        var infowindow = new google.maps.InfoWindow({content: contentString});

        var contentString =
					'<div id="infoBox">' +
					'<div id="siteImg">' + '<img src="'+ office[4] +'">' +'</div>' +
					'<div id="siteCont">' +
					'<div id="siteHeading">' + '<h1>' + office[0] + '</h1>' +'</div>' +
					'<div id="siteDesc">' + '<p>' + office[3] + '</p>' + '</div>' +
					'<a id="siteLink" href="'+ office[5] + '"' + '>' + 'Read More' + '</a>' +
					'</div>' +
					'</div>' +
					'</div>';

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: office[0],
        });

        google.maps.event.addListener(marker, 'click', getInfoCallback(map, contentString));
    }
}

function getInfoCallback(map, content) {
    var infowindow = new google.maps.InfoWindow({content: content});
    return function() {
            infowindow.setContent(content);
            infowindow.open(map, this);
        };
}

//This will render map on load
google.maps.event.addDomListener(window, 'load', initialize);

/* game-over :) */
