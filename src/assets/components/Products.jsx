//Container for Card
import Card from "./Card";
import { information } from "./Information";

export default function Products() {
  return (
    <div>
      {information.options.map((info) => (
        <div>
          {info.display == undefined ? (
            ""
          ) : (
            <Card>
              {info.display.map((slides) => (
                <img className="h-s" src={slides.image} />
              ))}
            </Card>
          )}
        </div>
      ))}
    </div>
  );
}
