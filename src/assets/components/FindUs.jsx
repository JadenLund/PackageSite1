import Contact from "./Contact";
import { directions } from "./Locations";
import { Stores } from "./Stores";
import FadeUp from "./graphics/FadeUp";
import FadeAppear from "./graphics/FadeAppear";
export default function FindUs() {
  return (
    <div>
      <FadeAppear>
        <h1 className="text-xxl mt-8">Find Us</h1>
      </FadeAppear>
      <div className="flex justify-center h-screen">
        <div className="grid grid-cols-2 ">
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
    </div>
  );
}
