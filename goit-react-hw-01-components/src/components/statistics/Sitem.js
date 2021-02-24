import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Sitem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

Sitem.defaultProps = {
  label: ".jpg",
  percentage: 0,
};

Sitem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Sitem;
