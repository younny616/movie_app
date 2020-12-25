import React from "react";
import { HashRouter, Route } from "react-router-dom"; // react-router-dom 에 있는 HashRouter, Router를 사용한다.
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  // about.js 로 들어가서 About component를 보여줘
  // path 가 /, /about 이면 두개 component를 렌더링함, 이때 exact={true}를 사용하면, 해당하는 path일때만 해당 component를 렌더링 한다.
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}

export default App;