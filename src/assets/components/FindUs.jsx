import Contact from "./Contact";
import { directions } from "./Locations";
import Stores from "./Stores";
export default function FindUs() {
  return (
    <div>
      <Contact />

      {directions.map((location) => (
        <div>
          <Stores
            name={location.name}
            add={location.address}
            lat={location.latitude}
            lon={location.longitude}
          />
        </div>
      ))}
    </div>
  );
}
