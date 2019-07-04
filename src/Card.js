import React from "react";

const cardStyle = {
  width: "16rem"
};

const Card = ({ robot: { name, email, id } }) => {
  return (
    <div className="card m-2 bg-warning" style={cardStyle}>
      <img
        className="card-img-top"
        src={`https://robohash.org/${id}?size=150x150`}
        alt=""
      />
      <div className="card-body text-center">
        <h1 className="card-title">{name}</h1>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default Card;
