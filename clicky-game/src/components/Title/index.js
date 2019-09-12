import React from "react";
import Counter from "../Counter/index";
import "./style.css";

function Title(props) {
  return(
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="title">{props.children}</h1>
    <p className="lead"><Counter/></p>
  </div>
</div>
)};

export default Title;
