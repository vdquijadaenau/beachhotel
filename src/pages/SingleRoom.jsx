import React, { Component } from "react";
import deafultBCG from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    deafultBCG
  };

  static contextType = RoomContext;

  componentDidMount() {}

  renderImages = images => {
    return images.map((img, i) => <img key={i} src={img} alt="images room" />);
  };

  renderExtras = extras => {
    return extras.map((extra, i) => <li key={i}>- {extra}</li>);
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Room could not be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <>
        <StyledHero image={images[0] || this.state.deafultBCG}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">{this.renderImages(images)}</div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Information</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size}SQFT</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "Pets Allowed" : "No pets allowed"}</h6>
              <h6>{breakfast && "Breakfast Included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">{this.renderExtras(extras)}</ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
