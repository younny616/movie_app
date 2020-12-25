import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true
  };
  getMovies = async () => {
    // axios get 하는 동안 시간이 걸리니까 기다렸다가 get이 완료되면 실행해
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading" : "We are ready"}</div>
    );
  }
}

export default App;
