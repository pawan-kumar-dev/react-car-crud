import React from "react";
import PropTypes from "prop-types";
import ViewCarRow from "../ViewCarRow/ViewCarRow";
import classes from "./CarTable.module.css";
const CarTable = (props) => {
     return props.carsData.length > 0 ? (
          <table border="1" className={classes.table}>
               <thead>
                    <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Model</th>
                         <th>Year</th>
                         <th>Color</th>
                         <th>Price</th>
                         <th>Image</th>
                         <th>Delete Data</th>
                    </tr>
               </thead>
               <tbody>
                    {props.carsData.map((item) => {
                         return (
                              <ViewCarRow
                                   key={item.Id}
                                   Id={item.Id}
                                   Name={item.Name}
                                   Model={item.Model}
                                   Year={item.Year}
                                   Color={item.Color}
                                   Price={item.Price}
                                   image={item.image}
                                   deletedata={() => {
                                        props.deletedata(item.Id);
                                   }}
                              />
                         );
                    })}
               </tbody>
          </table>
     ) : (
          <h2>No cars found</h2>
     );
};
CarTable.defaultProps = {
     carsData: [],
};
CarTable.propTypes = {
     carsData: PropTypes.array,
};
export default CarTable;
