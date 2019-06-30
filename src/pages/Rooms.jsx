import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BANNERS } from "../config/links";

const Rooms = () => {
  const { title, subtitle, buttonName, linkTo } = BANNERS.rooms;
  return (
    <Hero hero="roomsHero">
      <Banner title={title} subtitle={subtitle}>
        <Link to={linkTo} className="btn-primary">
          {buttonName}
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
