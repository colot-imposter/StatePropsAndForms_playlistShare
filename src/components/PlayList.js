import React, { Component } from "react";
import PlayListItem from "./PlayListItem";

export default class PlayList extends Component {
  "use strict";

  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };
  }
  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        console.log("woooms");
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("state", this.state.songs);
      });
  }

  fetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log(data);
      });
  };

  render() {
    let playListItemArray = this.state.songs;
    let songs = playListItemArray.map(song => {
      return (
        <div key={song._id} className="card playListItem">
          <PlayListItem song={song} />
        </div>
      );
    });
    return (
      <div className="container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.fetchData}
        >
          Update List
        </button>
        {songs}
      </div>
    );
  }
}
