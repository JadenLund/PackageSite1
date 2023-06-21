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
            <div>
              <Card>
                {info.display.map((slides) => (
                  <img src={slides.image} />
                ))}
              </Card>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
