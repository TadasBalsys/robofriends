import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="row card-columns">
      {robots.map((user, i) => {
        return <Card key={i} name={user.name} email={user.email} id={user.id}/>;
      })}
    </div>
  );
};

export default CardList;
