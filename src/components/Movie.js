import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movieName, actor, genre, scope, evaluation, time, price }) => {
  return (
    <>
      <div>영화이름 : {movieName}</div>
      <div>주연배우 : {actor}</div>
      <div>장르 : {genre}</div>
      <div>별점 : {scope}</div>
      <div>감동 : {evaluation}</div>
      <div>
        {time
          ? "상영시간 : " +
            time
              .filter((ele) => {
                return typeof ele === "string" || typeof ele === "number"
                  ? true
                  : false;
              })
              .join(", ")
          : null}
      </div>
      <div>{price ? "가격 : " + (price + 500) : null}</div>
    </>
  );
};

Movie.propTypes = {
  movieName: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  scope: PropTypes.string,
  evaluation: PropTypes.string,
  time: PropTypes.array,
  price: PropTypes.number,
};

export default Movie;
