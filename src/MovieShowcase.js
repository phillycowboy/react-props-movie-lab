import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((m, index) => 
      <MovieCard 
        key={index}
        poster={m.poster}
        title={m.title}
        IMDBRating={m.IMDBRating}
        genres={m.genres}
      />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
