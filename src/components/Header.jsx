import React from "react";
import styled from "styled-components";
import StarSolid from "../images/star_solid.png";
import StarEmpty from "../images/star_empty.png";
import Bgimage from "../images/bg.png";

function Header() {
  let starOption;
const [starFav, setStarFav] = React.useState(false);

function toggleFavorite(id) {
setStarFav(prevStar => !prevStar)
}

if (starFav === true) {           
starOption = <StarImg src={StarSolid} onClick={toggleFavorite}/>    
} else if (starFav === false){
starOption = <StarImg src={StarEmpty} onClick={toggleFavorite}/>
}

  return (
    <Container>
     <HeaderImageDiv>
     {starOption}
        <BgImg src={Bgimage} />
      </HeaderImageDiv>

      <HeaderTitleDiv>
        <div>
          <Title>Latest Rental Property</Title>
          <Desc>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum.
          </Desc>
        </div>
        <div>
          <DetButton>View Details</DetButton>
        </div>
      </HeaderTitleDiv>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: rgba(60, 101, 177, 10%);
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;


const HeaderImageDiv = styled.div`
  display: grid;
  position: relative;
  height: 25rem;
  width: 80rem;
`;

const BgImg = styled.img`
  height: 25rem;
  width: 80rem;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
`;

const StarImg = styled.img`
cursor: pointer;
grid-column: 1;
  grid-row: 1;
  z-index: 2;
position: absolute;
 right: 1rem;
 top: 1rem;
  `;

const HeaderTitleDiv = styled.div`
  height: 5rem;
  width: 80rem;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin: 0.5rem 3rem;
  
  `;

const Title = styled.h1`
  margin: 0;
`;

const Desc = styled.span``;

const DetButton = styled.button`
cursor: pointer;
  background-color: #3c64b1;
  color: #ffffff;
  border: none;
  padding: 12px 18px;
  margin: 5px;
  font-family: Mulish;
  font-style: Bold;
  font-size: 14px;
`;
