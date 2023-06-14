import Contact from "./Contact";
import { directions } from "./Locations";
import { MyMapComponent } from "./Stores";
// import Stores from "./Stores";
export default function FindUs() {
  return (
    <div>
      <Contact />

      {directions.map((direction) => (
        <div style={{ height: "100vh", width: "100%" }}>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }}></div>}
          />
          {/* <Stores
            name={direction.name}
            add={direction.address}
            lat={direction.latitude}
            lon={direction.longitude}
          /> */}
        </div>
      ))}
    </div>
  );
}
