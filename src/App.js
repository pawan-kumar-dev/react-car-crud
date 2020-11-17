import React, { useState } from "react";
import classes from "./App.module.css";
import CarTool from "./Components/CarTool/CarTool";
import logo from "./logo.svg";
const App = () => {
     const [car, setCar] = useState([
          {
               Id: 1,
               Name: "Scorpio",
               Model: "Mahindra",
               Year: 2018,
               Color: "Red",
               Price: 2000000,
               image: logo,
          },
          {
               Id: 2,
               Name: "Scorpio",
               Model: "Mahindra",
               Year: 2018,
               Color: "Red",
               Price: 2000000,
               image: logo,
          },
          {
               Id: 3,
               Name: "Scorpio",
               Model: "Mahindra",
               Year: 2018,
               Color: "Red",
               Price: 2000000,
               image: logo,
          },
     ]);
     return (
          <div className={classes.app}>
               <CarTool cars={car} setCar={setCar} />
          </div>
     );
};
export default App;
