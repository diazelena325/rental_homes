import React from 'react'
import styled from "styled-components";
import houseTest from '../images/house.png'
import Star from "../images/star_solid.png";

function Carousel() {
  return (
    <Container>
        <Title>Favorite Rentals</Title>
        <CarouselDiv>
            <ImageContainDiv>
              <ImageDiv>
                <StarImg src={Star} />
 <Image src={houseTest} alt=''/>
              </ImageDiv>
           
            <SubTitle>234 Sanger St.</SubTitle>
            <Description>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</Description>
            </ImageContainDiv>
           
        </CarouselDiv>
    </Container>
  )
}

export default Carousel;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Title = styled.h1`
    
`;

const CarouselDiv = styled.div`
    
`;

const ImageContainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 23rem;
    width: 16rem;
`;

const ImageDiv = styled.div`
    display: grid;
  position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 16.25rem;
    overflow: hidden;
     grid-column: 1;
  grid-row: 1;
  z-index: 1;
`;

const StarImg = styled.img`
    grid-column: 1;
  grid-row: 1;
  z-index: 2;
position: absolute;
 right: 1rem;
 top: 1rem;
`;

const SubTitle = styled.h4`
    padding: 0;
    margin: 32px 0px 12px 0px;
    font-size: 1.1rem;
    font-family: Mulish;
    font-weight: bold;
`;

const Description = styled.span`
    text-align: center;
    font-size: 0.875rem;
`;
