import React from "react";
import Afriend from "./Afriend";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <Afriend key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
