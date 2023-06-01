import React from "react";
import styled from "styled-components";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
function SummaryListing(props) {
  return (
    <Container>
      <LeftDiv>
        <Image src={require(`../images/${props.rentalData.img}`)} alt="" />
      </LeftDiv>

      <RightDiv>
        <Title>THSI IS THE ADDRESS</Title>
        <Description>
          At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.
        </Description>
        <Description>
          At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.
        </Description>
        <Description>
          At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.
        </Description>
        <Description>
          At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.
        </Description>
        <Cost>$949/month</Cost>
        <IconContainer>
          <PaidOutlinedIcon className="summaryIcon"/>
          <FamilyRestroomOutlinedIcon className="summaryIcon"/>
          <PetsOutlinedIcon className="summaryIcon"/>
        </IconContainer>
      </RightDiv>
    </Container>
  );
}

export default SummaryListing;

const Container = styled.div`
  height: 374px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
 
`;

const LeftDiv = styled.div`
  
  display: flex;
  justify-content: center;
  background-color: lightblue;
`;

const Image = styled.img`
  width: 575px;
  height: 350px;
  object-fit: cover;
  object-position: 0 80%;
`;

const RightDiv = styled.div`
padding: 0px 38px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
 
 
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Description = styled.span`
  font-size: 14px;
 padding: 12px 0px;
`;

const Cost = styled.h2`
  font-size: 18px;
`;

const IconContainer = styled.div`
margin: 0;
padding: 0;
  
  
`;
