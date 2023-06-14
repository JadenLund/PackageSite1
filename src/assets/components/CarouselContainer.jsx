import Carousel from "./Carousel";
import { information } from "./Information";
export default function TestContainer() {
  // const [display, products, location] = information;
  return (
    <div>
      {console.log(information)}
      <div className="grid grid-cols-2 gap-4"></div>
    </div>
  );
}

// {information.map((info) => (
//   <div className="col-span-1">
//     {/* {console.log(info)} */}
//       {info.display.map((display) => (
//       <div>
//           {/* <img src={display}/> */}
//           <h1>{display.image}</h1>
//       </div>
//       ))}
//     {/* info.word.map() */}
//     {/* {info.display.map((s) => (
// <></>
//     ))} */}
//   </div>
// ))}
