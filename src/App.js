import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import ClickCounter from "./components/ClickCounter";
import Menu from "./components/Menu";
import Youtube from "./components/Youtube";

function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>만든사람 - 잘난 박종훈</h2>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/popular"
          element={<MovieList apiPath="popular" listName="인기 영화 목록" />}
        />
        <Route
          path="/now_playing"
          element={<MovieList apiPath="now_playing" listName="상영중인 영화" />}
        />
        <Route
          path="/upcoming"
          element={<MovieList apiPath="upcoming" listName="개봉 예정 영화" />}
        />
        <Route path="/clickcounter" element={<ClickCounter />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </BrowserRouter>
  );

  /*return (
    
  );*/
}

export default App;
