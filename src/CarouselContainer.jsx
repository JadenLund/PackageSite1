import Carousel from "./Carousel";
import { information } from "./Information";
export default function TestContainer() {
  const [options, display, products, locations] = information;
  return (
    <div>

      {/* {console.log("meow", information.options)} */}
      <div className="grid grid-cols-2 gap-4">
        {/* {console.log(information.options)} */}
        {display.map((info) => (
         <div>
            {/* {console.log(info)} */}

         </div>
        ))}
      </div>
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
