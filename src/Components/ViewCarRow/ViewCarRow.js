import React from "react";
const ViewCarRow = ({
     Id,
     Name,
     Model,
     Year,
     Color,
     Price,
     image,
     deletedata,
}) => {
     const styles = {
          margin: "0.3rem 0",
          padding: "0.4rem 0.3rem",
          textAlign: "center",
          borderRadius: "0.3rem",
          border: "none",
     };
     const tr = {
          height: "20%",
          width: "20%",
     };
     const images = {
          width: "100%",
     };
     return (
          <tr>
               <td>{Id}</td>
               <td>{Name}</td>
               <td>{Model}</td>
               <td>{Year}</td>
               <td>{Color}</td>
               <td>Rs. {Price}</td>
               <td style={tr}>
                    <img style={images} src={image} alt="logo" />
               </td>
               <td>
                    <button style={styles} onClick={deletedata}>
                         Delete
                    </button>
               </td>
          </tr>
     );
};
export default ViewCarRow;
