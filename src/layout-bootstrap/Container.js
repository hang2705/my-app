import React, { Component } from "react";
import Container_First from "./Container_First";
import Container_Last from "./Container_Last";

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <Container_First />
        <Container_Last />
      </div>
    );
  }
}
