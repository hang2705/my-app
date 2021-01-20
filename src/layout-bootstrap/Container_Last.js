import React, { Component } from "react";
import Container_Last_Item from "./Container_Last_Item";

export default class Container_Last extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          {/* item */}
          <Container_Last_Item />
        </div>
        <div className="col-sm-4">
          {/* item */}
          <Container_Last_Item />
        </div>
        <div className="col-sm-4">
          {/* item */}
          <Container_Last_Item />
        </div>
      </div>
    );
  }
}
