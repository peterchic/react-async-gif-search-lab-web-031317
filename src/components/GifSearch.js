import React, {Component} from 'react'

export default class GifSearch extends Component{
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.fetchGifs(this.state.input)
    this.setState({
      input: ''
    })
  }

  render(){
    console.log(this.state.input)
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>

    )
  }

}
