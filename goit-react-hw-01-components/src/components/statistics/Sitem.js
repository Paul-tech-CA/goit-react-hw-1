import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Sitem = ({ label, percentage }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
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
