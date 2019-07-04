import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="row">
      {robots.map((user, i) => {
        return <Card key={user.id} robot={user} />;
      })}
    </div>
  );
};

export default CardList;
