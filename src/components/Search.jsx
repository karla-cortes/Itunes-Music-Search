import React, { Component } from 'react';


class Search extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="search" placeholder="Search Artist"/>
        <button>Find Albums</button>
      </form>
    );
  }
}



export default Search;
