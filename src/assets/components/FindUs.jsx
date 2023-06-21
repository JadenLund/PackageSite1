import Contact from "./Contact";
import { directions } from "./Locations";
import { Stores } from "./Stores";
// import Stores from "./Stores";
import FadeUp from "./graphics/FadeUp";
export default function FindUs() {
  return (
    <div className="flex justify-center">
      <div class="grid grid-cols-2">
        <FadeUp>
          <Contact />
        </FadeUp>

        {directions.map((direction) => (
          <div className="h-screen/2 w-a bg-black">
            <Stores
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
    </div>
  );
}
