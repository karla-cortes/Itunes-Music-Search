import React, { Component } from 'react';
import axios from "axios";


class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

//itunes.apple.com/search?term=...&entity=music
 componentDidMount() {
    axios.get("https://itunes.apple.com/search?term=bassnectar&limit=15")
      .then((response) => {
        let res = response.data;
        this.setState({ items: res.results})
      })
      .catch((error) => { console.log(error) } )
  }

  render() {
    return (
      <div className="Data">
        <ul>
          {this.state.items.map((item,i) =>
          <li key={i}>
           <img src={item.artworkUrl100} alt="albumImage" />
           <p>Artist: {item.artistName}</p>
           <p>Song Name: {item.trackName}</p>
           <p>Album: {item.collectionName}</p>
          </li>
           )}
        </ul>
      </div>
    );
    }
  }


export default Data;
