import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";

const Afriend = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

Afriend.defaultProps = {
  isOnline: false,
  avatar:
    "https://cdn.pixabay.com/photo/2020/12/10/10/17/jasper-national-park-5819878_1280.jpg",
};

Afriend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Afriend;
