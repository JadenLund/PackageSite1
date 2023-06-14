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

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    ></GoogleMap>
  ))
);

{
  /* <MyMapComponent isMarkerShown />// Map with a Marker */
}
{
  /* <MyMapComponent isMarkerShown={false} />// Just only Map */
}
