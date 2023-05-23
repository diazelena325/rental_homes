import React from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CarouselItem from "./CarouselItem";

function Carousel(props) {
  const cards = props.data.map((item) => {
    return <CarouselItem key={item.id} item={item} />;
  });

  return (
    <Container>
      <Title>{props.title}</Title>
      <CarouselDiv>
        <ArrowShape>
          <ArrowBackIosNewOutlinedIcon className="arrowIcon" />
        </ArrowShape>

        {cards}

        <ArrowShape>
          <ArrowForwardIosOutlinedIcon className="arrowIcon" />
        </ArrowShape>
      </CarouselDiv>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Mulish;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;

`;

const CarouselDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ArrowShape = styled.div`
  display: flex;
  align-items: start;
`;
