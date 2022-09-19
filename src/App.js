import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieAPI from "./components/MovieAPI";
import "./App.css";

function App(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    if (0 < movies.length) return;

    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=eee0b404582b9d52a555bb1670de9f30&language=ko&page=1&region=kr"
    );
    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovieAPI();
  }, []);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <h1>영화 추천 목록</h1>
          {movies.map((ele) => {
            return (
              <MovieAPI
                key={ele.id}
                title={ele.title}
                backdrop_path={ele.backdrop_path}
                overview={ele.overview}
                vote_average={ele.vote_average}
                adult={ele.adult}
                original_language={ele.original_language}
                release_date={ele.release_date}
                id={ele.id}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
