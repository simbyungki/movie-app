import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

class App extends Component {
  //render : componentWillMmount()(api 요청) > render()(데이터 가공) > componentDidMount()(자리 잡음)
  //update : componentWillReceiveProps() > shoudComponentUpdate() > componentWillUpdate() > render() > componentDidUpdate()

  state = {
    
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie title={movie.title_long} poster={movie.background_image} rating={movie.rating} genres={movie.genres} summary={movie.summary} key={movie.id} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'app' : 'app_loading'}>
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }
}

export default App;
