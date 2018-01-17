import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component { 
    
    static propTypes = {
        title: propTypes.string.isRequired,
        genres: propTypes.array.isRequired,
        summary: propTypes.string.isRequired,
        rating: propTypes.number.isRequired,
        poster: propTypes.string.isRequired
    }

    render(){
        //console.log(this.props)
        return (
            <div className="box">                
                <MoviePoster title={this.props.title} poster={this.props.poster} />
                <h4 className="title">{this.props.title}</h4>
                <dl className="rating">
                    <dt>rating : </dt>
                    <dd>{this.props.rating}</dd>
                </dl>
                <div className="genres_list">
                    {this.props.genres.map((genres, index) => <MovieGenres genres={genres} key={index} />)}
                </div>
                <p className="summary">{this.props.summary}</p>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <div className="poster">
                <img src={this.props.poster} alt={this.props.title} />
            </div>
        )
    }
}

class MovieGenres extends Component {
    render(){
        return (
            <span className="genre">{this.props.genres}</span>
        )
    }
}

export default Movie;

