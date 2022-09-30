import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCom from "./MovieCom";
import "./MovieList.css";

function MovieList(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    // if (0 < movies.length) return;
    if (!props.apiPath) return;

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=eee0b404582b9d52a555bb1670de9f30&language=ko&page=1&region=kr`
    );
    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    setMovies([]);
    getMovieAPI();
  }, [props.apiPath]);

  useEffect(() => {}, []);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <h1>{props.listName}</h1>
          {movies.map((ele) => {
            return (
              <MovieCom
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

export default MovieList;
