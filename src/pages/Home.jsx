import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BANNERS } from "../config/links";

import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRoom";

const Home = () => {
  const { title, subtitle, buttonName, linkTo } = BANNERS.home;
  return (
    <>
      <Hero>
        <Banner title={title} subtitle={subtitle}>
          <Link to={linkTo} className="btn-primary">
            {buttonName}
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
