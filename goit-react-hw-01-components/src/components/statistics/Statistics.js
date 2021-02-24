import React from "react";
import Sitem from "./Sitem";
import PropTypes from "prop-types";
import "./Statistics.css";

export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          {stats.map((item) => (
            <Sitem key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
