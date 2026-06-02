let map: google.maps.Map;
async function init(): Promise<void> {
    // Import the needed libraries
    const { Map } = await google.maps.importLibrary('maps');

    // Create a new map from the div with id="map".
    map = new Map(document.getElementById('map')!, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        renderingType: 'VECTOR',
    });

    console.log(map);
}

void init();