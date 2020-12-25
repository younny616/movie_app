import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true, // 처음에 isLoading은 true
    movies: []
  };
  getMovies = async () => {
    // axios get 하는 동안 시간이 걸리니까 기다렸다가 get이 완료되면 실행해
    const { data: { data: { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); // movies = movies : movies, movies 배열에 axios get data를 넣음
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      // isLoading true였다가, componentDidMount가 실행 -> axios.get -> movies에 data 저장 -> isLoading false -> false니까 movies.map 실행
      <section class="container">{isLoading ? (

        <div class="loader">
        <span class="loader__text">Loading...</span>
      </div>
      ) : (
        <div class="movies">
          {movies.map(movie => (
            <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
          ))}
        </div>
      )}
      </section>
    );
  }
}

export default App;
