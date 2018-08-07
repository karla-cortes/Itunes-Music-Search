import React, { Component } from 'react';
import Search from './Search';
import axios from "axios";


class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
    const artist = e.target.elements.artist.value;
    const replaced = artist.replace(/ /g, '+');
    axios.get(`https://itunes.apple.com/search?term=${replaced}&limit=15`)
      .then((response) => {
      let res = response.data;
      this.setState({ items: res.results})
    })
    .catch((error) => { console.log(error)})
}


  render() {
    return (
      <div className="Data">
        <Search handleSubmit={this.handleSubmit}/>
        <ul>
          {this.state.items.map((item,i) =>
          <li key={i}>
           <img src={item.artworkUrl100} alt="albumImage" />
           <p>Song Name: {item.trackName}</p>
           <p>Artist: {item.artistName}</p>
           <p>Album: {item.collectionName}</p>
           <p><audio src={item.previewUrl} controls></audio></p>
           <p><a href={item.artistViewUrl} target="_blank">View Artist</a></p>
           <p><a href={item.trackViewUrl} target="_blank">View Album</a></p>
          </li>
           )}
        </ul>
      </div>
    );
    }
  }


export default Data;
