import React, { Component } from "react";
import Title from "./Title";
import { servicesContent } from "../config/links";

class Services extends Component {
  renderServices = () =>
    servicesContent.map(({ title, icon, content }, index) => (
      <article className="service" key={index}>
        <span>{icon}</span>
        <h6>{title}</h6>
        <p>{content}</p>
      </article>
    ));

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">{this.renderServices()}</div>
      </section>
    );
  }
}

export default Services;
