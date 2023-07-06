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
