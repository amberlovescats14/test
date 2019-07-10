import React, { Component } from 'react'

const API_KEY = 'AIzaSyBuiLu4LttTKbx5-lC8TP3liU58ern2C7A '
export default class SearchBar extends Component {
  state = {
    searching : false,
    searchText: ''
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search Here" 
        onChange={(e)=>this.setState({ searchText: e.target.value  })}/>
        <button>Search</button>
      </div>
    )
  }
}
