import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css"

export default function Row ({title, id, fetchUrl}) {
  const [movies, setMovies] = useState([])

  const fetchMovieData = useCallback( async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  },[fetchUrl])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  return(
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow-left">
          <span className="arrow"
          // swiper 라이브러리 사용하지 않고도 슬라이드 기능 구현하는 코드
          // 한번 누를때 얼마나 이동할지 마음대로 정해야할때 사용하면 좋을듯!
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth -80
          }}>
            {"<"}
          </span>
        </div>
        <div id={id} className="row_posters">
          {movies.map(movie=> (
            <img key={movie.id}
            className="row_poster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
          />
          ))}
        </div>
        <div className="slider_arrow-right">
          <span className="arrow"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80
          }}>
            {">"}
          </span>
        </div>
      </div>
    </div>
  )
}