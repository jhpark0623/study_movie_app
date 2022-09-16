import React from "react";
import Movie from "./Movie";

const movie = [
  {
    id: 1,
    movieName: "탑건 - 메버릭",
    actor: "톰크루즈",
    genre: "스피드액션",
    scope: "☆☆☆☆☆",
    evaluation: "ㅈ망",
    time: ["10:00", "12:00", "15:00", "19:00"],
    price: 15000,
  },
  {
    id: 2,
    movieName: "수리남",
    actor: "황정민",
    genre: "국가물",
    scope: "★☆☆☆☆",
    evaluation: "ㅈ망",
  },
  {
    id: 3,
    movieName: "공조2",
    actor: "잘생긴놈 옆에 잘생긴놈 옆에 이쁜여자 옆에 이상한놈",
    genre: "액션",
    scope: "★★★★★",
    evaluation: "재밋다고함(난 모름)",
    time: ["10:30", "11:00", "15:00", "19:00", 190238481282388],
    price: 15000,
  },
];

function Movies() {
  return (
    <>
      <h1>Movie App</h1>
      <hr />
      {movie.map((ele) => {
        return (
          <div key={ele.id}>
            <Movie
              movieName={ele.movieName}
              actor={ele.actor}
              genre={ele.genre}
              scope={ele.scope}
              evaluation={ele.evaluation}
              time={ele.time}
              price={ele.price}
            />
            <hr />
          </div>
        );
      })}
      <Movie
        movieName={"어린신부"}
        actor={"문근영"}
        genre={"드라마"}
        scope={"☆☆☆☆☆"}
        evaluation={"망함"}
      />
      <hr />
      <Movie
        movieName={"늙은신부"}
        actor={"늙은 문근영"}
        genre={"드라마"}
        scope={"☆☆☆☆☆"}
        evaluation={"얘도 망함"}
      />
    </>
  );
}

export default Movies;
