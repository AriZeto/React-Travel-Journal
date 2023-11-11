import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.imageUrl} alt="" className="Card--image" />
      <section className="Card--information">
        <h1 className="Card--title">{props.title}</h1>
        <ul className="Card--items">
          <li> {props.location}</li>
          <li>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </li>
        </ul>
        <span className="Card--dates">
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </section>
    </div>
  );
}
