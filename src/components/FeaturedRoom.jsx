import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRoom extends Component {
  static contextType = RoomContext;

  renderRooms = rooms => {
    return rooms.map(room => <Room key={room.id} room={room} />);
  };

  render() {
    const { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : this.renderRooms(rooms)}
        </div>
      </section>
    );
  }
}

export default FeaturedRoom;
