import React from "react";
import "./style.css";

function Title(props) {
  return(
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="title">{props.children}</h1>
    <p className="lead">Click on each image - but only once!</p>
    <p className = "count"><strong>Count: {props.count} | Wins: {props.wins} Losses: {props.losses}</strong></p>
  </div>
</div>
)};

export default Title;
