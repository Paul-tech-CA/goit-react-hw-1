import React from "react";

const Painting = ({ url, title, profileUrl, tag, price }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author{" "}
      <a href={profileUrl} target="_blank">
        {tag}
      </a>
    </p>
    <p>Price: {price} credits</p>
    <button type="button">Add to the thumb</button>
  </div>
);

export default Painting;
