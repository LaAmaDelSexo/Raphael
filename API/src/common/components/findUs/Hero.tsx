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
        <div id="map" >
          <Map
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </div>
      </APIProvider>
    </section>
  )
}

export default Hero