import React from "react";

const MeetupDetail = (props) => {
  return (
    <div className="detail">
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      {props.description && <p>{props.description}</p>}
      {!props.description && <p>Description Coming Soon🙌</p>}
    </div>
  );
};

export default MeetupDetail;
