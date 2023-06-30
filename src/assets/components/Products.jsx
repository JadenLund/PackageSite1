//Container for Card
import Card from "./Card";
import { information } from "./Information";

export default function Products() {
  return (
    <div className="h-screen">
      {information.options.map((info) => (
        <div className="">
          {/* maybe put shit here */}
          {info.display == undefined ? (
            ""
          ) : (
            <div>
              <Card>
                {info.display.map((slides) => (
                  <img className="h-z" src={slides.image} />
                ))}
              </Card>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
