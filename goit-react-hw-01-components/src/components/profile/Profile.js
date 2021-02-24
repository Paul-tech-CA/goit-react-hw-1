import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default-image.jpg";
import "./Profile.css";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div style={{ fontSize: 20 }}>
      <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
            width="150"
          />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  avatar: { defaultImage },
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
