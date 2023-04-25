import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function Navbar() {
  return (
    <NavContainer>
        <LeftDiv>
        <Logo>LOGO</Logo>
        </LeftDiv>
        <RightDiv>
        <Link>Browse Homes for Rent</Link>
        <Link>Advance Search</Link>
        <AccountCircleOutlinedIcon/>
        <EmailOutlinedIcon/>
      <HelpOutlineOutlinedIcon/>
        </RightDiv>
        
        </NavContainer>
  )
}

const NavContainer = styled.nav`
  background-color: yellow;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
    background-color: aliceblue;
    margin: 20px;
`;

const Logo = styled.h1`
    color: blue;
`;

const RightDiv = styled.div`
width: 60%;
    background-color: beige;
    display: flex;
    margin: 20px;
    justify-content: space-around;

`;

const Link = styled.h3`
    color: black;
`;