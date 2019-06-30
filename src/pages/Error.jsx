import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BANNERS } from "../config/links";

const Error = () => {
  const { title, subtitle, buttonName, linkTo } = BANNERS.errors;
  return (
    <Hero>
      <Banner title={title} subtitle={subtitle}>
        <Link to={linkTo} className="btn-primary">
          {buttonName}
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
