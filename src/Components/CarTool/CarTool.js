import React, { useState } from "react";
import Header from "../Header/Header";
import CarTable from "../CarTable/CarTable";
import Form from "../Form/Form";
import classes from "./CarTool.module.css";
const CarTool = (props) => {
     const [carForm, setCarForm] = useState({
          //for maintaining the state using the hooks
          Name: "",
          Model: "",
          Year: "",
          Color: "",
          Price: "",
          image: "",
     });
     const [carsData, setCarsList] = useState(props.cars.concat()); //copy the existing data in carsData
     const Change = ({ target: { name, type, value } }) => {
          setCarForm({
               ...carForm,
               [name]: type === "number" ? Number(value) : value,
          });
     };
     const handleImage = (e) => {
          setCarForm({
               ...carForm,
               image:
                    e.target.files.length !== 0 &&
                    URL.createObjectURL(e.target.files[0]),
          });
     };
     const addCars = (e) => {
          e.preventDefault();
          if (
               carForm.Name === "" ||
               carForm.Model === "" ||
               carForm.Year === "" ||
               carForm.Color === "" ||
               carForm.Price === "" ||
               carForm.image === ""
          )
               return;
          setCarsList(
               carsData.concat({
                    ...carForm,
                    Id:
                         carsData.length === 0
                              ? 1
                              : Math.max(...carsData.map((data) => data.Id)) +
                                1,
               })
          );
          setCarForm({
               Name: "",
               Model: "",
               Year: "",
               Color: "",
               Price: "",
               image: "",
          });
     };
     const deletedata = (Id) => {
          setCarsList(
               carsData.filter((data) => {
                    return data.Id !== Id;
               })
          );
     };
     return (
          <div className={classes.Container}>
               <Header headerText="Add,Delete Car Data" />
               <CarTable
                    Change={Change}
                    carsData={carsData}
                    deletedata={deletedata}
               />
               <Form
                    addCars={addCars}
                    Change={Change}
                    carForm={carForm}
                    handleImage={handleImage}
               />
          </div>
     );
};

export default CarTool;
