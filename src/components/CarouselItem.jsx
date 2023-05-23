import React from "react";
import styled from "styled-components";
import StarSolid from "../images/star_solid.png";
import StarEmpty from "../images/star_empty.png";

function CarouselItem(props) {
let starOption;
const [starFav, setStarFav] = React.useState(props.item.favorite);

function toggleFavorite(id) {
setStarFav(prevStar => !prevStar)
}

if (starFav === true) {           
starOption = <StarImg src={StarSolid} onClick={toggleFavorite}/>    
} else if (starFav === false){
starOption = <StarImg src={StarEmpty} onClick={toggleFavorite}/>
}
    
  return (
    <ImageContainDiv>
      <ImageDiv>
    {starOption}

        <Image src={require(`../images/${props.item.img}`)} alt="" />
      </ImageDiv>
      <SubTitle>{props.item.address}</SubTitle>
      <Description>{props.item.desc}</Description>
    </ImageContainDiv>
  );
}

export default CarouselItem;

const ImageContainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 23rem;
  width: 16rem;
  margin: 0px 30px;
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
  cursor: pointer;
`;

const SubTitle = styled.h4`
  padding: 0;
  margin: 32px 0px 12px 0px;
  font-size: 1.1rem;
  font-family: Mulish;
  font-weight: bold;

  cursor: pointer;

  &:hover{
  text-decoration: underline;
}
`;

const Description = styled.span`
font-family: Mulish;
  text-align: center;
  font-size: 0.875rem;
  color: #373F41;
`;
