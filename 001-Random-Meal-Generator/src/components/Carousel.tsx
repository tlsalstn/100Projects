import React from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  from {
    transfrom: translateX(0%);
  }

  to {
    transform: translateX(-748px);
  }
`

const CarouselLayout = styled.div`
  width: 100%;
  overflow: hidden;
`

const CarouselContainer = styled.div`
  width: 100%;
  animation: ${animation} 10s linear infinite;
  display: flex;
  transition-timing-function: linear;

  &:hover {
    animation-play-state: paused;
  }
`

const CarouselItem = styled.div`
  display: flex;
  & > img {
    padding: 0 10px;
    user-drag: none;
    user-select: none;
  }
`

interface Props {
  images: string[]
}

const Carousel = (props: Props) => {
  const { images } = props

  return (
    <CarouselLayout>
      <CarouselContainer>
        <CarouselItem>
          {images.map((src, idx) => (
            <img src={src} alt={`carousel image ${idx}`} key={idx} />
          ))}
        </CarouselItem>
        <CarouselItem>
          {images.map((src, idx) => (
            <img src={src} alt={`carousel image ${idx}`} key={idx} />
          ))}
        </CarouselItem>
      </CarouselContainer>
    </CarouselLayout>
  )
}

export default Carousel
