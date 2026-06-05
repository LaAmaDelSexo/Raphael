"use Client";

import {APIProvider, Map} from '@vis.gl/react-google-maps';

const Key: string = "AIzaSyDo1csCODJmVEBQ_igzbDQhS7gLD0M9gwA"


function Hero () {
  return(
    <section>
      <h1>Ubicanos!</h1>
      <h2>Donde estamos?</h2>
      <p> Nos puedes ubicar en Loremp impsum dominem</p>
      <APIProvider apiKey={Key}>
        <div id="map" style={{ width: '100%', height: '400px' }} >
          <Map
            defaultCenter={{lat: 10.696306853340666, lng: -71.6064648658556}}
            defaultZoom={20}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </div>
      </APIProvider>
    </section>
  )
}

export default Hero