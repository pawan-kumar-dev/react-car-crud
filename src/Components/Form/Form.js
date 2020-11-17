import React from "react";
import PropType from "prop-types";
import classes from "./Form.module.css";
const Form = ({ addCars, Change, carForm, handleImage }) => {
     return (
          <form onSubmit={addCars}>
               <input
                    className={classes.inputs}
                    type="text"
                    autoComplete="off"
                    required
                    onChange={Change}
                    value={carForm.Name}
                    name="Name"
                    placeholder="Enter Name"
               />
               <input
                    className={classes.inputs}
                    type="text"
                    autoComplete="off"
                    required
                    onChange={Change}
                    value={carForm.Model}
                    name="Model"
                    placeholder="Enter Model"
               />
               <input
                    className={classes.inputs}
                    type="text"
                    autoComplete="off"
                    required
                    onChange={Change}
                    value={carForm.Year}
                    name="Year"
                    placeholder="Enter Year"
               />
               <input
                    className={classes.inputs}
                    type="text"
                    autoComplete="off"
                    required
                    onChange={Change}
                    value={carForm.Color}
                    name="Color"
                    placeholder="Enter Color"
               />
               <input
                    className={classes.inputs}
                    type="text"
                    autoComplete="off"
                    required
                    onChange={Change}
                    value={carForm.Price}
                    name="Price"
                    placeholder="Enter Price"
               />
               <input
                    className={classes.files}
                    type="file"
                    autoComplete="off"
                    name="image"
                    placeholder="Input Image"
                    required
                    onChange={handleImage}
               />
               <button className={classes.inputs}>Submit</button>
          </form>
     );
};
Form.propType = {
     addCars: PropType.func.isRequired,
     Change: PropType.func.isRequired,
     handleImage: PropType.func.isRequired,
     carsForm: PropType.object.isRequired,
};
export default Form;
