import React from "react";
import Sitem from "./Sitem";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className={style.statistics}>
        <h2 className={style.title}>{title}</h2>

        <ul className={style.statList}>
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
