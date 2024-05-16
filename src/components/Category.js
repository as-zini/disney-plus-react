import React from "react";
import { styled } from "styled-components";

const Category = () => {
  return(
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney"></img>
        <video autoPlay loop muted>
          <source src="/videos/disney.mp4" type="video/mp4"></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel"></img>
        <video autoPlay loop muted>
          <source src="/videos/marvel.mp4" type="video/mp4"></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar"></img>
        <video autoPlay loop muted>
          <source src="/videos/pixar.mp4" type="video/mp4"></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="starwars"></img>
        <video autoPlay loop muted>
          <source src="/videos/star-wars.mp4" type="video/mp4"></source>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="national"></img>
        <video autoPlay loop muted>
          <source src="/videos/national-geographic.mp4" type="video/mp4"></source>
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media(max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
  }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  // cubic-bezier는 트랜지션 시 가속, 감속 시간을 커스텀하는 함수
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, .1);

  img{
    inset: 0px;
    display: block;
    height: 100%;
    // 이미지의 본래 가로 세로 비율을 지킬수있는 속성(cover로 지정했을시 비율 지킬수있지만 잘리는부분이 있는것은 감수해야할 부분)
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width:100%;
    z-index: 1;
  }

  video{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    opacity:0;
    z-index:0;
  }

  &:hover{
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px
                rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);
    video{
      opacity: 1;
    }            

  }
`

