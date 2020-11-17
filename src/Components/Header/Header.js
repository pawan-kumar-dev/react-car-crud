import React, { memo } from "react";
import PropTypes from "prop-types";
const Header = ({ headerText }) => {
     const styles = {
          margin: "0",
          textAlign: "center",
     };
     return (
          <div style={{ width: "100%" }}>
               <h1 style={styles}>{headerText}</h1>
          </div>
     );
};
Header.defaultProps = {
     headerText: "Add,Delete Car Data",
};
Header.propTypes = {
     //checking the props typeee....
     headerText: PropTypes.string,
};
export default memo(Header);
