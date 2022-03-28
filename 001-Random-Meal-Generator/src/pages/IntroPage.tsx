import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Carousel from "../components/Carousel"

const StyledLink = styled(Link)`
  padding: 8px 32px;
  border-radius: 6px;
  width: fit-content;
  background: #00c40b;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }
`

const IntroLayout = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  background: #25b893;
  display: flex;
  justify-content: center;
`

const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 540px;
  width: 80%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > ${StyledLink} {
    margin-top: 20px;
  }
`

const IntroTitle = styled.p`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 675px) {
    font-size: 5.9vw;
  }
`

function IntroPage() {
  const carouselImages = [
    "/icons/apple.png",
    "/icons/bread.png",
    "/icons/cake.png",
    "/icons/cheese.png",
    "/icons/hamburger.png",
    "/icons/kebab.png",
    "/icons/pizza.png",
    "/icons/porridge.png",
    "/icons/prawn.png",
    "/icons/steak.png",
    "/icons/watermelon.png"
  ]

  return (
    <IntroLayout>
      <IntroContainer>
        <IntroTitle>Random Meal Generator</IntroTitle>
        <Carousel images={carouselImages} />
        <StyledLink to={"/generator"}>Generate</StyledLink>
      </IntroContainer>
    </IntroLayout>
  )
}

export default IntroPage
