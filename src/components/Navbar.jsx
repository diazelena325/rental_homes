import React from 'react'
import styled from 'styled-components'
import homeSmile from '../images/home_smile.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function Navbar() {
  return (
    <NavContainer>
        <LeftDiv>
          <HouseImg src={homeSmile}/>
        <Logo>HOME RENTAL</Logo>
        </LeftDiv>
        <RightDiv>
        <Link>Browse Homes for Rent</Link>
        <Link>Advance Search</Link>
        <AcctShape>
        <AccountCircleOutlinedIcon className='accountIcon'/>
        </AcctShape>
        <EmailOutlinedIcon className='emailIcon'/>
      <HelpOutlineOutlinedIcon className='helpIcon'/>
        </RightDiv>
        
        </NavContainer>
  )
}

const NavContainer = styled.nav`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const HouseImg = styled.img`
  
`;

const Logo = styled.span`
width: 30%;
    color: #3C64B1;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
`;

const RightDiv = styled.div`
width: 60%;
    display: flex;
    align-items: center;
    
    padding-right: 100px;
    justify-content: right;
    gap: 14px;

`;

const Link = styled.span`
    color: #373F41;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Mulish', sans-serif;
`;

const AcctShape = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
border-radius: 100%;
 background-color: #E5E5E5;
  height: 48px;
  width: 48px;
`