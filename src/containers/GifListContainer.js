import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  fetchGifs(search){
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC&limit=3')
    .then((data) => data.json())
    .then((gifs) => {
       this.setState({
        gifs: gifs.data
      })
    })
  }


  render(){
    return (
      <div>
        <h1>GifListContainer</h1>
        <GifSearch fetchGifs={this.fetchGifs.bind(this)}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
