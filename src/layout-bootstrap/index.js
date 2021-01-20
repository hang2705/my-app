import React, { Component } from "react";
import Carousel from "./Carousel";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout_Bootstrap extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Container />
        <Footer />
      </div>
    );
  }
}
