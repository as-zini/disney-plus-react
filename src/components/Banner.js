import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css"
import { styled } from "styled-components";

const Banner = () => {

  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // axios로 api받아오는 코드, 이미 만들어둔 axios 인스턴스 사용하면 baseURL은 따로 안써줘도됨
    const response =  await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 영화 하나의 ID 가져오기
    const movieID = response.data.results[
      //floor은 정수화
      Math.floor(Math.random() * response.data.results.length)
    ].id
    //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보 포함)
    const {data: movieDetail} = await axios.get(`movie/${movieID}` , {
      params: { append_to_response: "videos"}
    })
    setMovie(movieDetail);
    console.log(response)
    console.log(movieDetail)
  } 

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }

  if(isClicked){
    return(
      <>
        <Container>
          <HomeContainer>
            {/* 유튜브 영상 삽입 코드 */}
            <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    )
  }
  else{
    return(
      <header className="banner" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover"
      }}>
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner_buttons">
            {movie?.videos?.results[0]?.key &&
              <button className="banner_button play"
              onClick={() => setIsClicked(true)}>
                Play
              </button>
            }
          </div>
          <p className="banner_description">
            {truncate(movie.overview, 100)}
          </p>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
  
    )
  }
  }

  

export default Banner

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height:100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

`

// 아이프레임은 html lnline frame 요소이며 효과적으로 다른 html 페이지를 현재 페이지에 포함시키는
// 중첩된 브라워졸 iframe 요소를 이용하면 해당 웹페이지 안에 어떠한 제한없이 다른 페이지를 불러와 삽입 가능
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`