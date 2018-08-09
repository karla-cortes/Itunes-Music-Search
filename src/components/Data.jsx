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
  axios.get(`/search/${replaced}`).then(response => {
    let res = response.data;
    this.setState({ items: res.results})
  }).catch((error) => { console.log(error)});
}


  render() {
    return (
      <div className="data">
        <Search handleSubmit={this.handleSubmit}/>
        <ul>
          {this.state.items.map((item,i) =>
          <li key={i}>
           <img src={item.artworkUrl100.replace('100x100', '200x200')} alt="albumImage" className="album-image"/>
           <div className="album-info">
           <p><span>Song </span> {item.trackName}</p>
           <p><span>Artist </span> {item.artistName}</p>
           <p><span>Album </span> {item.collectionName}</p>
           <p><audio src={item.previewUrl} controls></audio></p>
           <p><a href={item.artistViewUrl} target="_blank" className="link-button">View Artist</a></p>
           <p><a href={item.trackViewUrl} target="_blank" className="link-button">View Album</a></p>
           </div>
          </li>
           )}
        </ul>
      </div>
    );
    }
  }


export default Data;
