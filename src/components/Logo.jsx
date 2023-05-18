import React from 'react'
import styled from 'styled-components';
import homeSmile from '../images/home_smile.png'

function Logo() {
  return (
    <>
    <HouseImg src={homeSmile}/>
    <LogoText>HOME RENTAL</LogoText>
    </>
  )
}

export default Logo;

const HouseImg = styled.img`
  
`;

const LogoText = styled.span`
width: 30%;
    color: #3C64B1;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
`;