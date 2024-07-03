// import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  lazy,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  Suspense,
} from "react";
import "./App.css";
// import Counter2 from "./assets/Counter2";
const Counter2 = lazy(() => import("./assets/Counter2"));
// import Counter from "./assets/Counter";
const Counter = lazy(() => import("./assets/Counter"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>please Wait</h1>}>
        <Counter />
        <Counter2 />
      </Suspense>
    </>
  );
}

// import Cart from "./Cart";
// import Todo from "./Todo";
// import axios from "axios";
// import Reducers from "./assets/Reducers";
// // import Modal from "./assets/Modal";
// // import Component from "./assets/Component";
// // import Services from "./assets/Services";
// // import About from "./assets/About";
// // import Contact from "./assets/Contact";
// // import WEB from "./assets/WEB";
// // import DIgitalMarketing from "./assets/DIgitalMarketing";
// // import DATA from "./assets/DATA";
// import CounterButtons from "./assets/CounterButtons";
// import { CounterContext } from "./assets/Context";
// import CounterSecondButtons from "./assets/CounterSecondButtons";
// import NewButton from "./NewButton";
// import Products from "./Productslist.json";
// import Cards from "./Cards";
// import { Heading1 } from "lucide-react";

// function App() {
//   let [value, setValue] = useState([
//     { name: "Nitin", age: 28, rollno: 1 },
//     { name: "Aman", age: 21, rollno: 2 },
//     { name: "Ashish", age: 38, rollno: 3 },
//     { name: "Naveen", age: 32, rollno: 4 },
//   ]);
//   const OBJ = [
//     { name: "Nitin", age: 28, rollno: 1 },
//     { name: "Aman", age: 21, rollno: 2 },
//     { name: "Ashish", age: 38, rollno: 3 },
//     { name: "Naveen", age: 32, rollno: 4 },
//   ];

//   const inputValue = useRef();
//   const getValue = () => {
//     value = inputValue.current.value.toLowerCase();
//     // console.log(value)

//     let item = OBJ.filter((elem) => {
//       let keys = Object.keys(elem);
//       // console.log(keys);

//       for (let i = 0; i < keys.length; i++) {
//         let v = keys[i];
//         // console.log(v);

//         if (String(elem[v]).toLowerCase().includes(value)) {
//           return elem;
//         }
//       }
//     });

//     setValue(item);
//   };

//   return (
//     <>
//       <input type="text" ref={inputValue} onChange={getValue} />
//       <button>get</button>

//       <div>
//         {value.map((item) => {
//           return (
//             <>
//               <h3>Name : {item.name}</h3>
//               <h4>Roll No. : {item.rollno}</h4>
//               <h4>Age : {item.age}</h4>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// function App() {
//   const [location, setLocation] = useState("");
//   const [data, setData] = useState({});

//   let URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0498080e1a5197f270b0caf571365be5&units=metric`;
//   // console.log(location);

//   const getWeather = () => {
//     axios(URL).then((res) => {
//       setData(res.data);
//     });
//   };

//   return (
//     <>
//       <div className="main_container">
//         <input
//           value={location}
//           type="text"
//           placeholder="get weather..."
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <button onClick={getWeather}>get</button>
//         <h1>
//           City : {data.name}
//           {data.sys ? <span>{`, ${data.sys.country}`}</span> : null}
//         </h1>
//         <h2>Temp : {data.main ? <span>{data.main.temp} </span> : null} C</h2>
//       </div>
//     </>
//   );
// }

// function App() {
//   const currentVal = useContext(CounterContext);
//   return (
//     <>
//       <h1> Counter : {currentVal.Mainval}</h1>
//       <CounterButtons />
//       <CounterSecondButtons />
//     </>
//   );
// }

// function App() {
//   const [value, setvalue] = useState(0);
//   const [value1, setvalue1] = useState(0);

//   const increaseOne = () => {
//     setvalue(value + 1);
//   };
//   const increaseTwo = useCallback(() => {
//     setvalue1(value1 + 1);
//   }, [value1]);

//   return (
//     <>
//       <button onClick={increaseOne}>
//         Increment <span>{value}</span>
//       </button>
//       <NewButton increaseTwo={increaseTwo} value1={value1} />
//     </>
//   );
// }

//redux cart
// function App() {
//   return (
//     <>
//       <Cart />
//       <div>
//         {Products.map((pro) => {
//           return (
//             <div>
//               <Cards {...pro} />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// function App() {
//   // const Val = useRef();

//   // const getVal = () => {
//   //   if (Val.current.value.length == 0) {
//   //     alert("fields cannot be empty");
//   //   }
//   // };
//   const [val, setVal] = useState("");
//   const getVal = () => {
//     // console.log(typeof(val));
//     // console.log(document.getElementById("one").value);
//   };

//   return (
//     <>
//       <input
//         id="one"
//         type="text"
//         value={val}
//         onChange={(e) => setVal(e.target.value)}
//       />
//       <button onClick={getVal}>get</button>
//     </>
//   );
// }

export default App;
