import React from 'react'

function GifList( props ){
  return (
    <ul>
      {props.gifs.map(function(gif){
        return <li key={gif.id}>
          <img src={gif.images.fixed_height.url}/>
        </li>
      })}
    </ul>
  )
}

export default GifList
