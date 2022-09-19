import propTypes from "prop-types";
import "./Movie.css";

function MovieAPI(props) {
  return (
    <div className="movie__data">
      <div className="movie__poster">
        <img
          className="moive__poster_img"
          src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
          style={{ maxWidth: "300px" }}
        ></img>
        <div className="movie__adult">{!props.adult ? "19" : null}</div>
      </div>

      <h3 className="movie__title">제목 : {props.title}</h3>
      <div className="movie__overview">
        줄거리 : {props.overview.slice(0, 100)}...
      </div>
      <br />
      <div className="movie__average">
        평점 : {props.vote_average} / 10{" "}
        {Array(Number(props.vote_average.toFixed(0)))
          .fill(0)
          .map((ele, idx) => {
            return <span key={idx}>⭐</span>;
          })}
      </div>

      <div className="movie__lang">언어 : {props.original_language}</div>
      <div className="movie__date movie__infor">
        개봉일 : {props.release_date}
      </div>
      <div className="movie__id movie__infor">영화ID : {props.id}</div>
    </div>
  );
}

MovieAPI.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backdrop_path: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  vote_average: propTypes.number.isRequired,
  adult: propTypes.bool.isRequired,
  original_language: propTypes.string.isRequired,
  release_date: propTypes.string.isRequired,
};

export default MovieAPI;
