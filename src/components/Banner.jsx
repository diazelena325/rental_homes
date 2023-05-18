import React from 'react'
import styled from "styled-components";

function Banner() {
  return (
    <Container>
<Title>Need Help?</Title>
<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem nibh purus neque tellus, enim, in fermentum. Aliquet urna malesuada risus.</Description>
    <ButtonContainer>
    <Button>Contact Us</Button>
    <Button>Tutorials</Button>
    </ButtonContainer>
    
    </Container>
  )
}

export default Banner;

const Container = styled.div`
    height: 348px;
    background-color: rgba(60, 101, 177, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 57px 0px;
`;

const Title = styled.span`
font-family: Mulish;
    font-size: 32px;
    font-weight: bold;
`;

const Description = styled.span`
width: 40%;
text-align: center;
font-family: Mulish;
 margin-top: 32px;
   margin-bottom: 56px;
   color: rgba(115, 123, 125, 1);
`;

const ButtonContainer = styled.div`
width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Button = styled.button`
border: none;
height: 48px;
width: 117px;
padding: 0;
background-color: #3C64B1;
color: white;
font-family: Mulish;
font-size: 14px;
`;