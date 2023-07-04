// import React from "react";
// import GoogleMapReact from "google-map-react";
// // import { Icon } from '@iconify/react'
// // import locationIcon from '@iconify/icons-mdi/map-marker'

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     {/* <Icon icon={locationIcon} className="pin-icon" /> */}
//     <p className="pin-text">{text}</p>
//   </div>
// );

// export default function Stores({ name, add, lat, lon, zoomLevel }) {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div className="map">
//       <h2 className="map-h2">{add}</h2>
//       {console.log()}
//       <div className="google-map">
//         <GoogleMapReact bootstrapURLKeys={{ key: "" }}>
//           {/* <LocationPin lat={lat} lng={lon} text={add} /> */}
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// }

import { useMemo } from "react";
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export function Stores() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOXrBGty4UmANDZbuXAy6OOvUkURjZ02o",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
  );
}

{
  <MyMapComponent isMarkerShown />; // Map with a Marker
}
{
  <MyMapComponent isMarkerShown={false} />; // Just only Map
}
